import { Request, Response } from "express";
import { loginService } from "../services/auth.service";

export const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
            return;
        }

        const { token, user } = await loginService(email, password);
        res.status(200).json({ success: true, token, data: user });
    } catch (error: any) {
        res.status(401).json({ success: false, message: error.message });
    }
};
