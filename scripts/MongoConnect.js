import mongoose from "mongoose";
import { config } from "dotenv";

import Pilot from "./models/Pilot.js";
import Track from "./models/Track.js";
import User from "./models/User.js";

config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

// const Pilot = mongoose.model('Pilot', Pilot.schema);
// const Track = mongoose.model('Track', Track.schema);
const User = mongoose.model('User', User.schema);

// export default { Pilot, Track, User };
export default { User };