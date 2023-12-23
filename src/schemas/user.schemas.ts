import { z } from "zod";

const userEmailSchema = z.object({
  id: z.number(),
  email: z.string().max(45),
  userId: z.number(),
});

const userContactSchema = z.object({
  id: z.number(),
  phoneNumber: z.string().max(15),
  userId: z.number(),
});

const userSchema = z.object({
  id: z.number(),
  fullName: z.string().max(60),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  contact: z.string().max(30),
  additionalEmails: z.optional(z.array(userEmailSchema)),
  additionalContacts: z.optional(z.array(userContactSchema)),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  additionalContacts: true,
  additionalEmails: true,
});

const userEmailCreateSchema = userEmailSchema.omit({
  id: true,
});

const userContactCreateSchema = userContactSchema.omit({
  id: true,
});

const userReturnSchema = userSchema.omit({
  password: true,
});

const userEmailRequestSchema = userSchema.pick({
  email: true,
});

const userReadSchema = userReturnSchema;

const userUpdateSchema = userReturnSchema.partial();

export {
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
};