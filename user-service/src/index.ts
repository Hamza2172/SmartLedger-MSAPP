import dotenv from "dotenv";
import http from "http";
import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { initSocket } from "../src/socket/socket";
import userRoutes from "../src/routes/user.routes";
import authRoutes from "../src/routes/auth.routes";
import { UserModel } from "./models/user.model";

dotenv.config();
const app = express();
const httpServer = http.createServer(app);

// ─── Middleware ───────────────────────────────────────────────
app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// ─── Seed First Admin ─────────────────────────────────────────
const seedAdmin = async (): Promise<void> => {
    const existing = await UserModel.findOne({ role: "ADMIN" });
    if (existing) return;

    await UserModel.create({
        firstName: "Hamza",
        lastName: "Fares",
        email: "hamza1farse23@gmail.com",
        password: await bcrypt.hash("123456", 10),
        role: "ADMIN",
        isActive: true,
    });

    console.log(
        "👑 Admin created → email: hamza1farse23@gmail.com | password: 123456",
    );
};

// ─── Start ────────────────────────────────────────────────────
const port = process.env.PORT || 3000;
const mongo_uri = process.env.MONGO_URI;
mongoose
    .connect(mongo_uri as string)
    .then(async () => {
        console.log("✅ Database Connected");
        await seedAdmin();
        initSocket(httpServer);
        httpServer.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`);
            console.log(`📡 Socket.io ready`);
        });
    })
    .catch((error) => {
        console.log("❌ Database connection failed:", error);
        process.exit(1);
    });
