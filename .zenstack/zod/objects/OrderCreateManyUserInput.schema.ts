/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderCreateManyUserInput>;
export const OrderCreateManyUserInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), price: z.number(), note: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()])
}).strict() as SchemaType;
