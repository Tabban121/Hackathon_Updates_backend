import { Router } from 'express';
import authcontroller from '../container';
const router = Router();
router.post('/register', authcontroller.register);

export default router;