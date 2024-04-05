/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemScalarWhereInput>;
export const OrderItemScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => OrderItemScalarWhereInputObjectSchema),
    z.lazy(() => OrderItemScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => OrderItemScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => OrderItemScalarWhereInputObjectSchema),
    z.lazy(() => OrderItemScalarWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), orderId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), productId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), price: z.union([z.lazy(() => IntFilterObjectSchema),
    z.number()]).optional(), note: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional()
}).strict() as SchemaType;
