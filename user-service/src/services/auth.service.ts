import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findByEmailRepo } from "../repositories/user.repository";

export const loginService = async (email: string, password: string) => {
    const user = await findByEmailRepo(email);
    if (!user) {
        throw new Error("Invalid email or password");
    }

    if (!user.isActive) {
        throw new Error("Your account has been deactivated");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" },
    );

    return { token, user };
};
