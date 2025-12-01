"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = __importDefault(require("../services/auth.service"));
class AuthController {
    async register(req, res) {
        try {
            const user = await new auth_service_1.default();
            res.status(201).json({ message: 'User registered', userId: user.Register });
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    ;
}
exports.default = AuthController;
