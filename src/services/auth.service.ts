import { User, IUser } from '../database/models/user.model';


export default class AuthService{

    public async Register (userData: Partial<IUser>): Promise<IUser>  {
    const existing = await User.findOne({ email: userData.email , _id: userData._id });
    if (existing) throw new Error('Email already in use');

    const user = new User(userData);
    return await user.save();
    };
}
