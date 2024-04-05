/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderMaxAggregateInputType>;
export const OrderMaxAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), userId: z.literal(true).optional(), price: z.literal(true).optional(), note: z.literal(true).optional(), createdAt: z.literal(true).optional(), updatedAt: z.literal(true).optional()
}).strict() as SchemaType;
