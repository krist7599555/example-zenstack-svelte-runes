/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { OrderRelationFilterObjectSchema } from './OrderRelationFilter.schema';
import { OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemWhereInput>;
export const OrderItemWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => OrderItemWhereInputObjectSchema),
    z.lazy(() => OrderItemWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => OrderItemWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => OrderItemWhereInputObjectSchema),
    z.lazy(() => OrderItemWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), orderId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), productId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), price: z.union([z.lazy(() => IntFilterObjectSchema),
    z.number()]).optional(), note: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), order: z.union([z.lazy(() => OrderRelationFilterObjectSchema),
    z.lazy(() => OrderWhereInputObjectSchema)]).optional(), product: z.union([z.lazy(() => ProductRelationFilterObjectSchema),
    z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict() as SchemaType;
