/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.AuthWhereInput>;
export const AuthWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => AuthWhereInputObjectSchema),
    z.lazy(() => AuthWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => AuthWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => AuthWhereInputObjectSchema),
    z.lazy(() => AuthWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), username: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), password: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
