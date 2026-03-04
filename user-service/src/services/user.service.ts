import bcrypt from "bcryptjs";
import {
    createUserRepo,
    getAllUsersRepo,
    getUserByIdRepo,
    updateUserRepo,
    replaceUserRepo,
    softDeleteUserRepo,
    deleteUserRepo,
    findByEmailWithoutPasswordRepo,
} from "../repositories/user.repository";
import { IUser, UserModel } from "../models/user.model";

export const createUserServices = async (data: IUser) => {
    const existingUser = await findByEmailWithoutPasswordRepo(data.email);
    if (existingUser) {
        throw new Error("Email already exists");
    }

    data.password = await bcrypt.hash(data.password, 10);

    return await createUserRepo(data);
};

export const getAllUsersService = async (page = 1, limit = 10) => {
    const users = await getAllUsersRepo(page, limit);
    const total = await UserModel.countDocuments({ isActive: true });
    const totalPages = Math.ceil(total / limit);

    return { users, total, totalPages, page, limit };
};

export const getUserByIdService = async (userId: string) => {
    const user = await getUserByIdRepo(userId);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

export const updateUserService = async (
    userId: string,
    updateData: Partial<IUser>,
) => {
    const { role, isActive, ...dataToUpdate } = updateData;

    if (dataToUpdate.password) {
        dataToUpdate.password = await bcrypt.hash(dataToUpdate.password, 10);
    }

    const updatedUser = await updateUserRepo(userId, dataToUpdate);
    if (!updatedUser) {
        throw new Error("User not found");
    }
    return updatedUser;
};

export const replaceUserService = async (userId: string, updateData: IUser) => {
    const { role, isActive, ...dataToReplace } = updateData;

    if (dataToReplace.password) {
        dataToReplace.password = await bcrypt.hash(dataToReplace.password, 10);
    }

    const replacedUser = await replaceUserRepo(userId, dataToReplace as any);
    if (!replacedUser) {
        throw new Error("User not found");
    }
    return replacedUser;
};

export const softDeleteUserService = async (userId: string) => {
    const deletedUser = await softDeleteUserRepo(userId);
    if (!deletedUser) {
        throw new Error("User not found");
    }
    return deletedUser;
};

export const deleteUserService = async (userId: string) => {
    const deletedUser = await deleteUserRepo(userId);
    if (!deletedUser) {
        throw new Error("User not found");
    }
    return deletedUser;
};
