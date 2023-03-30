import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String },
        password: { type: String },
        points: { type: Number, default: 0 },
        lastLogin: { type: Date, default: Date.now },
    },
    { collection: "users", required: true, timestamps: true }
);

export default UserSchema;
