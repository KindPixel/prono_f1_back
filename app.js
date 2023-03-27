import express from 'express';
import { config } from 'dotenv';
import bp from 'body-parser';
import { UserRouter, PilotRouter, TrackRouter } from './scripts/db/index.js';

config();

const urlencoded = bp.urlencoded; //? body-parser
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json()); //? express

app.use("/api/v1/user", UserRouter);
// app.use("/api/v1/pilot", PilotRouter);
// app.use("/api/v1/track", TrackRouter);

//initialize body-parser to parse incoming parameters requests to req.body
app.use(urlencoded({ extended: true }));

app.listen(PORT, () => {
	console.log('Server running on port 3000');
});



