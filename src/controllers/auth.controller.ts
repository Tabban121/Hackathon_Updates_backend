import { Request, Response } from 'express';
import Register  from '../services/auth.service';

export default class AuthController{
    public async  register(req: Request, res: Response)  {
    
    try {
        const user = await new Register();
        res.status(201).json({ message: 'User registered', userId: user.Register });
    } 
    catch (err: any) {
        res.status(400).json({ error: err.message });
    }
    };
}