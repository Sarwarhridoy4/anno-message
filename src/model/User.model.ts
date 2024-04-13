import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  trim: boolean;
  unique: boolean;
  isAcceptingMessages: boolean;
  isVerified: boolean;
  messages: Message[];
}

// Define Message schema
const MessageSchema: Schema<Message> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Define User schema
const UserSchema: Schema<User> = new Schema({
  username: { type: String, required: [true, "Username is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email",
    ],
  },
  password: { type: String, required: [true, "Password is required"] },
  verifyCode: { type: String, required: [true, "Verify Code is required"] },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify Code Expiry Date is required"],
  },
  isVerified: { type: Boolean, default: false },
  isAcceptingMessages: { type: Boolean, default: true },
  messages: [MessageSchema],
});

// Define and export Message model
const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

// Define and export User model
export default UserModel;
