import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import  Types from 'mongoose'

export interface IUser {
  _id?: Types.ObjectId;
  email: string;
  password: string;
  name: string;
  university: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  university: { type: String, required: true }
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

export const User = model<IUser>('User', userSchema);