/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.AuthSelect>;
export const AuthSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), username: z.boolean().optional(), password: z.boolean().optional()
}).strict() as SchemaType;
