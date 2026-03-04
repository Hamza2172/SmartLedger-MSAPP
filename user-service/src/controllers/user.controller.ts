import { Request, Response } from "express";
import {
    createUserServices,
    getAllUsersService,
    getUserByIdService,
    updateUserService,
    replaceUserService,
    softDeleteUserService,
    deleteUserService,
} from "../services/user.service";

import { notifyAdmins } from "../socket/socket";
// Create user
export const createUserController = async (req: Request, res: Response) => {
    try {
        const newUser = await createUserServices(req.body);

        // 🔔 Notify all connected admins
        notifyAdmins(newUser);

        res.status(201).json({ success: true, data: newUser });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get all users
export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const result = await getAllUsersService(page, limit);
        res.status(200).json({ success: true, ...result });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get user by id
export const getUserController = async (req: Request, res: Response) => {
    try {
        const user = await getUserByIdService(req.params.id as string);
        res.status(200).json({ success: true, data: user });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update user (PATCH)
export const updateUserController = async (req: Request, res: Response) => {
    try {
        const updatedUser = await updateUserService(
            req.params.id as string,
            req.body,
        );
        res.status(200).json({ success: true, data: updatedUser });
    } catch (err: any) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// Replace user (PUT)
export const replaceUserController = async (req: Request, res: Response) => {
    try {
        const replacedUser = await replaceUserService(
            req.params.id as string,
            req.body,
        );
        res.status(200).json({ success: true, data: replacedUser });
    } catch (err: any) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// Soft delete user
export const softDeleteUserController = async (req: Request, res: Response) => {
    try {
        const deletedUser = await softDeleteUserService(
            req.params.id as string,
        );
        res.status(200).json({ success: true, data: deletedUser });
    } catch (err: any) {
        res.status(404).json({ success: false, message: err.message });
    }
};

// Hard delete user
export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const deletedUser = await deleteUserService(req.params.id as string);
        res.status(200).json({ success: true, data: deletedUser });
    } catch (err: any) {
        res.status(404).json({ success: false, message: err.message });
    }
};
