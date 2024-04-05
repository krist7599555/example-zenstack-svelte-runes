/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrderItemCountOrderByAggregateInputObjectSchema } from './OrderItemCountOrderByAggregateInput.schema';
import { OrderItemAvgOrderByAggregateInputObjectSchema } from './OrderItemAvgOrderByAggregateInput.schema';
import { OrderItemMaxOrderByAggregateInputObjectSchema } from './OrderItemMaxOrderByAggregateInput.schema';
import { OrderItemMinOrderByAggregateInputObjectSchema } from './OrderItemMinOrderByAggregateInput.schema';
import { OrderItemSumOrderByAggregateInputObjectSchema } from './OrderItemSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemOrderByWithAggregationInput>;
export const OrderItemOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), orderId: z.lazy(() => SortOrderSchema).optional(), productId: z.lazy(() => SortOrderSchema).optional(), price: z.lazy(() => SortOrderSchema).optional(), note: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => OrderItemCountOrderByAggregateInputObjectSchema).optional(), _avg: z.lazy(() => OrderItemAvgOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => OrderItemMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => OrderItemMinOrderByAggregateInputObjectSchema).optional(), _sum: z.lazy(() => OrderItemSumOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
