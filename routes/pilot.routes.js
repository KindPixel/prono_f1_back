import { Router } from "express";
import PilotController from "../controllers/user.controller.js";

const PilotRouter = Router();

PilotRouter.post("/register", PilotController.create);
PilotRouter.post("/login", PilotController.login);
PilotRouter.get("all", PilotController.getAll);
PilotRouter.get("leaderboard", PilotController.getLeaderboard);

//? id: ObjectID - MongoDB
PilotRouter.put("/update/:id", PilotController.update);
PilotRouter.get("/fetch/:id", PilotController.getOne);


export default PilotRouter;