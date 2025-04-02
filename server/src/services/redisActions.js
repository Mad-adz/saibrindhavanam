import { redis } from "../config/redis/upstashRedis.js";

const expiresIn = Number(process.env.DONATION_DATA_EXPIRES_IN);

// const expiresIn = 300;

export const setDonationDetails = async (orderId, donationData) => {
  await redis.set(orderId, JSON.stringify(donationData), "EX", expiresIn);
};

export const getDonationDetails = async (orderId) => {
  const donationData = await redis.get(orderId);
  if (!donationData) throw new Error("Donation details not found!");
  return JSON.parse(donationData);
};

export const deleteDonationDetails = async (orderId) => {
  await redis.del(orderId);
};
