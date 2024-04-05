/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductSumAggregateInputType>;
export const ProductSumAggregateInputObjectSchema: SchemaType = z.object({
    price: z.literal(true).optional()
}).strict() as SchemaType;
