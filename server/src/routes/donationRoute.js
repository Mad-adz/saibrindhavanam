import express from "express";
import {
  checkPaymentStatus,
  makePayment,
} from "../controllers/donationController.js";

const router = express.Router();

router.post("/pay", makePayment);
router.get("/payment-status/:merchantOrderId", checkPaymentStatus);

export default router;
