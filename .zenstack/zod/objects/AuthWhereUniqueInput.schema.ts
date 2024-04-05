/* eslint-disable */
import { z } from 'zod';
import { AuthWhereInputObjectSchema } from './AuthWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.AuthWhereUniqueInput>;
export const AuthWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), username: z.string().optional(), AND: z.union([z.lazy(() => AuthWhereInputObjectSchema),
    z.lazy(() => AuthWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => AuthWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => AuthWhereInputObjectSchema),
    z.lazy(() => AuthWhereInputObjectSchema).array()]).optional(), password: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
