import express from "express";
import authMiddleware from "../middleware/auth.js"
import { placeOrder } from "../controllers/orderControler.jsx";

const orderRoter =express.Router();

orderRoter.post("/place",authMiddleware,placeOrder);

export default  orderRoter;