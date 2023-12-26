import { z } from "zod";

const customerEmailSchema = z.object({
  id: z.number(),
  email: z.string().max(45),
  customer: z.number(),
});

const customerContactSchema = z.object({
  id: z.number(),
  phoneNumber: z.string().max(45),
  customer: z.number(),
});

const customerSchema = z.object({
  id: z.number(),
  fullName: z.string().max(60),
  email: z.string().max(45).email(),
  contact: z.string().max(30),
  createdAt: z.string(),
  updatedAt: z.string(),
  additionalEmails: z.optional(z.array(customerEmailSchema)),
  additionalContacts: z.optional(z.array(customerContactSchema)),
});

const customerCreateSchema = customerSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  additionalContacts: true,
  additionalEmails: true,
});

const customerEmailCreateSchema = customerEmailSchema.omit({
  id: true,
  customer: true,
});

const customerContactCreateSchema = customerContactSchema.omit({
  id: true,
  customer: true,
});

const customerReturnSchema = customerSchema;

const customerEmailRequestSchema = customerSchema.pick({
  email: true,
});

const customerReadSchema = customerReturnSchema.array();

const customerUpdateSchema = customerReturnSchema.partial();

export {
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
};
