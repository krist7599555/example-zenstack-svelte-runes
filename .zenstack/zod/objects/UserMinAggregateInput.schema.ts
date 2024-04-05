/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserMinAggregateInputType>;
export const UserMinAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), phone: z.literal(true).optional(), name: z.literal(true).optional(), createdAt: z.literal(true).optional(), updatedAt: z.literal(true).optional()
}).strict() as SchemaType;
