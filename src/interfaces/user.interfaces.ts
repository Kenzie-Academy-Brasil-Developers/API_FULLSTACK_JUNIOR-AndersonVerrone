import { z } from "zod";

import {
  userEmailSchema,
  userContactSchema,
  userSchema,
  userCreateSchema,
  userEmailCreateSchema,
  userContactCreateSchema,
  userReturnSchema,
  userEmailRequestSchema,
  userReadSchema,
  userUpdateSchema,
} from "../schemas";

import { DeepPartial } from "typeorm";

type IUser = z.infer<typeof userSchema>;
type IUserEmails = z.infer<typeof userEmailSchema>;
type IUserContacts = z.infer<typeof userContactSchema>;
type IUserCreate = z.infer<typeof userCreateSchema>;
type IUserEmailsCreate = z.infer<typeof userEmailCreateSchema>;
type IUserContactsCreate = z.infer<typeof userContactCreateSchema>;
type IUserEmailsReturn = {
  message: string;
};
type IUserContactsReturn = {
  message: string;
};
type IUserReturn = z.infer<typeof userReturnSchema>;
type IUserEmail = z.infer<typeof userEmailRequestSchema>;
type IUserRead = z.infer<typeof userReadSchema>;
type IUserUpdate = DeepPartial<typeof userUpdateSchema>;

export {
  IUser,
  IUserEmail,
  IUserEmails,
  IUserContacts,
  IUserCreate,
  IUserEmailsCreate,
  IUserContactsCreate,
  IUserReturn,
  IUserRead,
  IUserUpdate,
  IUserContactsReturn,
  IUserEmailsReturn,
};
