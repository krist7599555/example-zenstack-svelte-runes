/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemSumOrderByAggregateInput>;
export const OrderItemSumOrderByAggregateInputObjectSchema: SchemaType = z.object({
    price: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
