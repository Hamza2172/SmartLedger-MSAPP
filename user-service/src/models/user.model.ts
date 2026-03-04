import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: "ADMIN" | "USER";
    isActive?: boolean;
    phoneNumber?: string;
    dob?: Date;
}

const userSchema = new Schema<IUser>(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 10,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 10,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            // match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            select: false, // ← never returned in queries by default
        },
        role: {
            type: String,
            enum: ["ADMIN", "USER"],
            default: "USER",
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        phoneNumber: {
            type: String,
        },
        dob: {
            type: Date,
        },
    },
    { timestamps: true },
);

export const UserModel = mongoose.model<IUser>("User", userSchema);
