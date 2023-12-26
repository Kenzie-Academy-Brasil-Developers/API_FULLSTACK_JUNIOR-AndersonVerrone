import { z } from "zod";

import {
  customerEmailSchema,
  customerContactSchema,
  customerSchema,
  customerCreateSchema,
  customerEmailCreateSchema,
  customerContactCreateSchema,
  customerReturnSchema,
  customerEmailRequestSchema,
  customerReadSchema,
  customerUpdateSchema,
} from "../schemas";

import { DeepPartial } from "typeorm";

type ICustomer = z.infer<typeof customerSchema>;
type ICustomerEmails = z.infer<typeof customerEmailSchema>;
type ICustomerContacts = z.infer<typeof customerContactSchema>;
type ICustomerCreate = z.infer<typeof customerCreateSchema>;
type ICustomerEmailsCreate = z.infer<typeof customerEmailCreateSchema>;
type ICustomerContactsCreate = z.infer<typeof customerContactCreateSchema>;
type ICustomerReturn = z.infer<typeof customerReturnSchema>;
type ICustomerEmailsReturn = {
  message: string;
};
type ICustomerContactsReturn = {
  message: string;
};
type ICustomerEmail = z.infer<typeof customerEmailRequestSchema>;
type ICustomerRead = z.infer<typeof customerReadSchema>;
type ICustomerUpdate = DeepPartial<typeof customerUpdateSchema>;

export {
  ICustomer,
  ICustomerEmail,
  ICustomerEmails,
  ICustomerContacts,
  ICustomerCreate,
  ICustomerEmailsCreate,
  ICustomerContactsCreate,
  ICustomerReturn,
  ICustomerRead,
  ICustomerUpdate,
  ICustomerContactsReturn,
  ICustomerEmailsReturn,
};
