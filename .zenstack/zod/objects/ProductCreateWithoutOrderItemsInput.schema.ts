/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductCreateWithoutOrderItemsInput>;
export const ProductCreateWithoutOrderItemsInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), name: z.string(), description: z.string().optional(), price: z.number(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()])
}).strict() as SchemaType;
