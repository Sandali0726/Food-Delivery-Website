import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import morgan from "morgan";

import foodRouter from "./routes/foodRoutes.js";

// Load environment variables
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Database connection
try {
    connectDB();
    console.log("Database connected successfully");
} catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
}

// API endpoints
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
    res.send("API Working");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Start server
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
