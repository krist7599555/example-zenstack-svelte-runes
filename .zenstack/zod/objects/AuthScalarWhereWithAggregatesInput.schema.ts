/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.AuthScalarWhereWithAggregatesInput>;
export const AuthScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => AuthScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => AuthScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => AuthScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => AuthScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => AuthScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), username: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), password: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
