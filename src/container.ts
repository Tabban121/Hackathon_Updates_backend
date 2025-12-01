import AuthController from "./controllers/auth.controller";
import AuthService from "./services/auth.service";
import { User } from "./database/models/user.model";

const authcontroller = new AuthController()

export default authcontroller