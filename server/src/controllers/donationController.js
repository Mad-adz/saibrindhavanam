import asyncHandler from "express-async-handler";
import { randomUUID } from "crypto";
import {
  StandardCheckoutClient,
  Env,
  StandardCheckoutPayRequest,
} from "pg-sdk-node";
import { validateDonation } from "../validators/donationValidator.js";
import { capitalize, formatTimestampToIST } from "../utils/helper.js";
import {
  getDonationDetails,
  setDonationDetails,
} from "../services/redisActions.js";
import { sendDonationMail } from "../utils/donationEmail.js";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const clientVersion = Number(process.env.CLIENT_VERSION);
const env = Env.PRODUCTION;

// const env = Env.SANDBOX; // Env.PRODUCTION

const client = StandardCheckoutClient.getInstance(
  clientId,
  clientSecret,
  clientVersion,
  env
);

// #  make new payment controller

export const makePayment = asyncHandler(async (req, res) => {
  const { error, value } = validateDonation(req.body);

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  let { fname, lname, email, mobile, amount, comments } = value;

  fname = capitalize(fname);
  lname = capitalize(lname);
  amount = amount * 100;

  console.log({ fname, lname, email, mobile, amount, comments });

  const merchantOrderId = randomUUID();

  const redirectUrl = `${process.env.CLIENT_APP_BASE_URL}/payment-status/${merchantOrderId}`;

  const request = StandardCheckoutPayRequest.builder()
    .merchantOrderId(merchantOrderId)
    .amount(amount)
    .redirectUrl(redirectUrl)
    .build();

  const response = await client.pay(request);

  if (response.state !== "PENDING" || !response.redirectUrl) {
    console.error("Payment failed - no redirect URL:", response);
    return res.status(500).json({ success: false, message: "Payment failed" });
  }

  console.log({ makePayment: response });

  // ✅ Store payment details in Redis
  await setDonationDetails(response?.orderId, {
    user: {
      fname,
      lname,
      email,
      mobile,
      amount: (amount / 100).toFixed(2),
      comments,
    },
    payment: { orderId: response?.orderId, state: response?.state },
  });

  return res.status(200).json({
    success: true,
    message: "Redirecting to payment page",
    checkoutPageUrl: response.redirectUrl,
  });
});

// # check payment status controller

export const checkPaymentStatus = asyncHandler(async (req, res) => {
  const { merchantOrderId } = req.params;
  if (!merchantOrderId) {
    return res
      .status(400)
      .json({ success: false, message: "Missing merchantOrderId!" });
  }
  console.log({ merchantOrderId });

  const response = await client.getOrderStatus(merchantOrderId);

  console.log({ checkPaymentStatus: response });

  const orderId = response.orderId;

  // ✅ Fetch existing donation details from Redis
  const donationData = await getDonationDetails(orderId);

  if (!donationData) {
    return res
      .status(404)
      .json({ success: false, message: "Donation details not found!" });
  }

  const timestamp = response?.timestamp || Date.now();
  const formattedTimestamp = formatTimestampToIST(timestamp);

  Object.assign(donationData.payment, {
    state: response?.state,
    paymentMode: response?.paymentDetails?.[0]?.paymentMode || "",
    transactionId: response?.paymentDetails?.[0]?.transactionId || "",
    timestamp: formattedTimestamp,
  });

  if (response?.state !== "" && !donationData.emailSent) {
    await sendDonationMail(donationData);
    donationData.emailSent = true;
  }

  await setDonationDetails(orderId, donationData);

  res.json({
    success: true,
    status: response?.state || "", // PENDING ||FAILED || COMPLETED.
    orderDetails: response || null,
  });
});
