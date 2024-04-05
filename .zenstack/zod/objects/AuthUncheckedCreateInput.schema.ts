/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.AuthUncheckedCreateInput>;
export const AuthUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), username: z.string(), password: z.string()
}).strict() as SchemaType;
