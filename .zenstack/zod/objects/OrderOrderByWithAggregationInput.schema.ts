/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrderCountOrderByAggregateInputObjectSchema } from './OrderCountOrderByAggregateInput.schema';
import { OrderAvgOrderByAggregateInputObjectSchema } from './OrderAvgOrderByAggregateInput.schema';
import { OrderMaxOrderByAggregateInputObjectSchema } from './OrderMaxOrderByAggregateInput.schema';
import { OrderMinOrderByAggregateInputObjectSchema } from './OrderMinOrderByAggregateInput.schema';
import { OrderSumOrderByAggregateInputObjectSchema } from './OrderSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderOrderByWithAggregationInput>;
export const OrderOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), price: z.lazy(() => SortOrderSchema).optional(), note: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => OrderCountOrderByAggregateInputObjectSchema).optional(), _avg: z.lazy(() => OrderAvgOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => OrderMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => OrderMinOrderByAggregateInputObjectSchema).optional(), _sum: z.lazy(() => OrderSumOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
