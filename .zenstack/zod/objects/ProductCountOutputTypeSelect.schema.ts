/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductCountOutputTypeSelect>;
export const ProductCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    orderItems: z.boolean().optional()
}).strict() as SchemaType;
