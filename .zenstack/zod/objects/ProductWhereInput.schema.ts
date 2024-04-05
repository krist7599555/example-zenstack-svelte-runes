/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { OrderItemListRelationFilterObjectSchema } from './OrderItemListRelationFilter.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductWhereInput>;
export const ProductWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ProductWhereInputObjectSchema),
    z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ProductWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ProductWhereInputObjectSchema),
    z.lazy(() => ProductWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), name: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), description: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), price: z.union([z.lazy(() => IntFilterObjectSchema),
    z.number()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), orderItems: z.lazy(() => OrderItemListRelationFilterObjectSchema).optional()
}).strict() as SchemaType;
