import express from "express";
import { config } from "dotenv";
import bp from "body-parser";
import UserRouter from "./routes/user.routes.js";
import cors from "cors";
import morgan from "morgan";

const corsOptions = {
    origin: ["http://localhost:3000", "http://25.30.134.134:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};

config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan("dev"));
app.use(cors());
app.use(cors(corsOptions));

app.use("/f1/api/v1/users", UserRouter);
// app.use("/f1/api/v1/pilots", PilotRouter);
// app.use("/f1/api/v1/tracks", TrackRouter);



app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
