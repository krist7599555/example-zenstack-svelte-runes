/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserCreateWithoutOrdersInput>;
export const UserCreateWithoutOrdersInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), phone: z.string(), name: z.string(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()])
}).strict() as SchemaType;
