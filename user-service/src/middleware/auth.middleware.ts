import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";

// ─── Protect ──────────────────────────────────────────────────
// Verifies the JWT and attaches the user to req.user

export const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        // 1) Check token exists in Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                success: false,
                message: "Access denied. No token provided.",
            });
            return;
        }

        // 2) Extract and verify token
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
            id: string;
        };

        // 3) Find user from token payload
        const user = await UserModel.findById(decoded.id);
        if (!user || !user.isActive) {
            res.status(401).json({
                success: false,
                message: "User no longer exists or is inactive.",
            });
            return;
        }

        // 4) Attach user to request
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
    }
};

// ─── isAdmin ──────────────────────────────────────────────────
// Must be used AFTER authMiddleware

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.user?.role === "ADMIN") {
        next();
    } else {
        res.status(403).json({
            success: false,
            message: "Access Denied: Admins Only!",
        });
    }
};
