/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemAvgOrderByAggregateInput>;
export const OrderItemAvgOrderByAggregateInputObjectSchema: SchemaType = z.object({
    price: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
