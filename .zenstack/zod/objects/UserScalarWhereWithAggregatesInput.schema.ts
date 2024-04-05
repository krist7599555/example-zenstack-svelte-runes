/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserScalarWhereWithAggregatesInput>;
export const UserScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), phone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional()
}).strict() as SchemaType;
