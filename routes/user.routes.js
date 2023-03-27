import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.post("/register", UserController.create);
UserRouter.post("/login", UserController.login);

//? id: ObjectID - MongoDB
UserRouter.put("/update/:id", UserController.update);
UserRouter.get("/fetch/:id", UserController.getOne);

export default UserRouter;