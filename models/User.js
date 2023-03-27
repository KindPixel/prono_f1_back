import mongoose from "mongoose";
const { Schema } = mongoose;

export default new Schema({
	name: String, // String is shorthand for {type: String}
	email: String,
	password: String,
	points: Number
});
