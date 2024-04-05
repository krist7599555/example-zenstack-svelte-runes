/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductMinAggregateInputType>;
export const ProductMinAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), name: z.literal(true).optional(), description: z.literal(true).optional(), price: z.literal(true).optional(), createdAt: z.literal(true).optional(), updatedAt: z.literal(true).optional()
}).strict() as SchemaType;
