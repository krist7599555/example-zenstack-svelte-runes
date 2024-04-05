/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemMinOrderByAggregateInput>;
export const OrderItemMinOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), orderId: z.lazy(() => SortOrderSchema).optional(), productId: z.lazy(() => SortOrderSchema).optional(), price: z.lazy(() => SortOrderSchema).optional(), note: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
