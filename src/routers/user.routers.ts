import { validateToken } from "../middlewares";
import { userControllers } from "../controllers";
import { Router } from "express";

export const userRoutes: Router = Router();

userRoutes.post(
    "",
    userControllers.create
)

userRoutes.get(
    "",
    validateToken,
    userControllers.readById
)