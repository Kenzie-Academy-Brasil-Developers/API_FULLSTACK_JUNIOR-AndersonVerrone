import { loginControllers } from "../controllers";
import { Router } from "express";

export const loginRoutes: Router = Router();

loginRoutes.post(
    "",
    loginControllers.create
)