import "dotenv/config";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { ILoginCreate, ILoginReturn } from "../interfaces";
import { Repository } from "typeorm";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const create = async (payload: ILoginCreate): Promise<ILoginReturn> => {
  const repository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await repository.findOne({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const password = await bcrypt.compare(payload.password, user.password);

  if (!password) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    { userId: user.id, registrationDate: user.createdAt },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN!,
    }
  );

  return { token };
};

export default {
    create,
}