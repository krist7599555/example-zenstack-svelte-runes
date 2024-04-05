/* eslint-disable */
import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemScalarWhereWithAggregatesInput>;
export const OrderItemScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), orderId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), price: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema),
    z.number()]).optional(), note: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional()
}).strict() as SchemaType;
