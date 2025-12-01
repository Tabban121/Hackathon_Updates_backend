"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../database/models/user.model");
class AuthService {
    async Register(userData) {
        const existing = await user_model_1.User.findOne({ email: userData.email, _id: userData._id });
        if (existing)
            throw new Error('Email already in use');
        const user = new user_model_1.User(userData);
        return await user.save();
    }
    ;
}
exports.default = AuthService;
