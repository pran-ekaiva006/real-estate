// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import listingRoutes from "./routes/listingRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // <-- Add this line

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
app.use("/api/listings", listingRoutes);
app.use("/api/auth", authRoutes); // <-- Add this line

// Test route
app.get("/api", (req, res) => {
  res.send({ message: "Backend API is running 🚀" });
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));