/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductCountOrderByAggregateInputObjectSchema } from './ProductCountOrderByAggregateInput.schema';
import { ProductAvgOrderByAggregateInputObjectSchema } from './ProductAvgOrderByAggregateInput.schema';
import { ProductMaxOrderByAggregateInputObjectSchema } from './ProductMaxOrderByAggregateInput.schema';
import { ProductMinOrderByAggregateInputObjectSchema } from './ProductMinOrderByAggregateInput.schema';
import { ProductSumOrderByAggregateInputObjectSchema } from './ProductSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductOrderByWithAggregationInput>;
export const ProductOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), name: z.lazy(() => SortOrderSchema).optional(), description: z.lazy(() => SortOrderSchema).optional(), price: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => ProductCountOrderByAggregateInputObjectSchema).optional(), _avg: z.lazy(() => ProductAvgOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => ProductMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => ProductMinOrderByAggregateInputObjectSchema).optional(), _sum: z.lazy(() => ProductSumOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
