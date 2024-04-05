/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderMaxOrderByAggregateInput>;
export const OrderMaxOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), userId: z.lazy(() => SortOrderSchema).optional(), price: z.lazy(() => SortOrderSchema).optional(), note: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
