/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductMinOrderByAggregateInput>;
export const ProductMinOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), name: z.lazy(() => SortOrderSchema).optional(), description: z.lazy(() => SortOrderSchema).optional(), price: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
