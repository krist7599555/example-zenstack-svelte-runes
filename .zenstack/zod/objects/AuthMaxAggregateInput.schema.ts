/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.AuthMaxAggregateInputType>;
export const AuthMaxAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), username: z.literal(true).optional(), password: z.literal(true).optional()
}).strict() as SchemaType;
