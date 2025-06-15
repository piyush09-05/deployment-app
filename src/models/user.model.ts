import mongoose from 'mongoose';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

export interface IUser extends mongoose.Document {
  userId: string,
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  userId: {
    type: String, 
    required: true,
    default : () => nanoid(),
    unique: true
  },
  name: {
    type: String,
    required: true,
    default: () => nanoid(),
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;
