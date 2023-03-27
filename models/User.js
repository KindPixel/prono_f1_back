import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String },
        password: { type: String },
        points: { type: Number },
    },
    { collection: "users", required: true }
);

export default UserSchema;
