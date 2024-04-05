/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.AuthCountAggregateInputType>;
export const AuthCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), username: z.literal(true).optional(), password: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
