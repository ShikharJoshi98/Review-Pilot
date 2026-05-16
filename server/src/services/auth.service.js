const User = require("../models/user.model");
const AppError = require("../utils/error");
const generateToken = require("../utils/generateToken");

const createUser = async (data) => {
    try {
        const userExist = await User.findOne({ email: data.email.toLowerCase() });
        if (userExist) {
            throw new AppError("User already exists", 409);
        }
        const user = await User.create(data);
        return user;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw error;
    }
}

const loginUser = async (data) => {
    try {
        const user = await User.findOne({ email: data.email.toLowerCase() });
        if (user && (await user.comparePassword(data.password))) {
            return {
                user: {
                    _id: user._id,
                    fullName: user.fullName,
                    email: user.email
                },
                token: generateToken(user._id)
            };
        }
        else {
            throw new AppError("Invalid credentials", 400);
        }
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw error;
    }
}

module.exports = {
    createUser,
    loginUser
}