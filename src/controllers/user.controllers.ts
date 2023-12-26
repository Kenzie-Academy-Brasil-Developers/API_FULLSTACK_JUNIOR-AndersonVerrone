import { Request, Response } from "express";
import { IUserCreate, IUserReturn } from "interfaces";
import { userServices } from "../services";

const create = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const payload: IUserCreate = req.body;
    const newUser: IUserReturn = await userServices.create(payload);
    return res.status(201).json(newUser);
};

const readById = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId: number = res.locals.userId;
    const userRead: IUserReturn = await userServices.readById(userId);
    return res.status(200).json(userRead);
}

export default {
    create,
    readById,
}