import mongoose from "mongoose";
const { Schema } = mongoose;

export default new Schema({
	name: String, // String is shorthand for {type: String}
	team: String,
	password: String,
	points: Number
});
