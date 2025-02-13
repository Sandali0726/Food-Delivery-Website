import express from "express";
import authMiddleware from "../middleware/auth.js"
import { placeOrder, verifyOrder } from "../controllers/orderControler.js";

const orderRoter =express.Router();

orderRoter.post("/place",authMiddleware,placeOrder);
orderRoter.post("/verify",authMiddleware,verifyOrder);

export default  orderRoter;