import { UserModel, IUser } from "../models/user.model";

export const createUserRepo = async (data: IUser) => {
    return await UserModel.create(data);
};

export const getAllUsersRepo = async (page = 1, limit = 10) => {
    const skip = (page - 1) * limit;

    return await UserModel.find({ isActive: true }).skip(skip).limit(limit);
};

export const getUserByIdRepo = async (userId: string) => {
    return await UserModel.findOne({ _id: userId, isActive: true });
};

// Patch Update
export const updateUserRepo = async (
    userId: string,
    updateData: Partial<IUser>,
) => {
    const existingUser = await UserModel.findById(userId);
    if (!existingUser) {
        return null;
    }
    return await UserModel.findByIdAndUpdate(userId, updateData, {
        returnDocument: "after",
        runValidators: true,
    });
};

// Put Replace
export const replaceUserRepo = async (
    userId: string,
    updateData: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role?: string;
        isActive?: boolean;
        phoneNumber: string;
        dob: Date;
    },
) => {
    const existingUser = await UserModel.findById(userId);
    if (!existingUser) {
        return null;
    }
    updateData.role = existingUser.role;
    updateData.isActive = existingUser.isActive;
    return await UserModel.findOneAndReplace({ _id: userId }, updateData, {
        returnDocument: "after",
        runValidators: true,
    });
};

// For login (auth needs password)
export const findByEmailRepo = async (email: string) => {
    return await UserModel.findOne({ email }).select("+password");
};

// For checking if email exists (no password needed)
export const findByEmailWithoutPasswordRepo = async (email: string) => {
    return await UserModel.findOne({ email });
};

// Hard Delete
export const deleteUserRepo = async (userId: string) => {
    return await UserModel.findByIdAndDelete(userId);
};

// Soft Delete
export const softDeleteUserRepo = async (userId: string) => {
    return await UserModel.findByIdAndUpdate(
        userId,
        { isActive: false },
        { returnDocument: "after" },
    );
};
