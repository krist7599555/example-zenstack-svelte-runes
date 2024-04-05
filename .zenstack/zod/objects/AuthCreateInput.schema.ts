/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.AuthCreateInput>;
export const AuthCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), username: z.string(), password: z.string()
}).strict() as SchemaType;
