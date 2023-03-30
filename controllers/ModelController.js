import mongoose from "mongoose";
import { config } from "dotenv";
import UserSchema from "../schema/User.js";

// import PilotSchema from "../models/Pilot.js";
// import TrackSchema from "../models/Track.js";

config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB :)');
});

export const UserModel = mongoose.model("User", UserSchema);

export default { UserModel };
