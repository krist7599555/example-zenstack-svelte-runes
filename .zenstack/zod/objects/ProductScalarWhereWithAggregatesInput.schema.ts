/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput>;
export const ProductScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), price: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema),
    z.number()]).optional(), createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional()
}).strict() as SchemaType;
