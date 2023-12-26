import { AppDataSource } from "../data-source";
import { User, UserContact, UserEmail } from "../entities";
import { IUser, IUserContacts, IUserContactsCreate, IUserContactsReturn, IUserCreate, IUserEmailsCreate, IUserEmailsReturn, IUserRead, IUserReturn, IUserUpdate } from "../interfaces";
import { userReadSchema, userReturnSchema } from "../schemas";
import { Repository } from "typeorm";

const create = async (payload: IUserCreate): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const createdUser= userRepository.create(payload);
    await userRepository.save(createdUser);
    const newUser: IUserReturn = userReturnSchema.parse(createdUser);
    return newUser;
};

const readById = async ( userId: number ): Promise<IUserRead> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
        where: { id: userId }
    });
    const userRead: IUserRead = userReadSchema.parse(user);
    return userRead;
};

const createAdditionalContact = async ( userId: number, payload: IUserContactsCreate ): Promise<IUserContactsReturn> => {
    const userContactRepository: Repository<UserContact> = AppDataSource.getRepository(UserContact);
    const additionalContacts: IUserContactsCreate = userContactRepository.create({
        phoneNumber: payload.phoneNumber,
        user: {id: userId},
    });
    await userContactRepository.save(additionalContacts);
    const message: IUserContactsReturn = { message: "Additional contact created" };
    return message;
};

const createAdditionalEmail = async ( userId: number, payload: IUserEmailsCreate ): Promise<IUserEmailsReturn> => {
    const userEmailRepository: Repository<UserEmail> = AppDataSource.getRepository(UserEmail);
    const additionalEmails: IUserEmailsCreate = userEmailRepository.create({
        email: payload.email,
        user: {id: userId},
    });
    await userEmailRepository.save(additionalEmails);
    const message: IUserEmailsReturn = { message: "Additional email created" };
    return message;
};

const updated = async (
    userId: number,
    payload: IUserUpdate
): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const oldUser: User|null = await userRepository.findOne({
        where: {
            id: userId,
        },
    });
    const newUser: User = userRepository.create({
        ...oldUser,
        ...payload,
    });
    await userRepository.save(newUser);
    const updatedUser: IUserReturn = userReturnSchema.parse(User);
    return updatedUser;
}

export default {
    create,
    readById,
    createAdditionalContact,
    createAdditionalEmail,
    updated,
}