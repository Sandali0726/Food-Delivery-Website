import express from 'express';
import cors from 'cors';

import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

console.log("MongoDB URI:", process.env.MONGODB_URI);




import foodRouter from "./routes/foodRoutes.js";



// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());


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
