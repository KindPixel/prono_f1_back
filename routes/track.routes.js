import { Router } from "express";
import TrackController from "../controllers/track.controller.js";

const TrackRouter = Router();

TrackRouter.post("/register", TrackController.create);
TrackRouter.post("/login", TrackController.login);
TrackRouter.get("all", TrackController.getAll);
TrackRouter.get("leaderboard", TrackController.getLeaderboard);

//? id: ObjectID - MongoDB
TrackRouter.put("/update/:id", TrackController.update);
TrackRouter.get("/fetch/:id", TrackController.getOne);


export default TrackRouter;