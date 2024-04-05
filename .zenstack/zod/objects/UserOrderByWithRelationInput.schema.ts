/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrderOrderByRelationAggregateInputObjectSchema } from './OrderOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), phone: z.lazy(() => SortOrderSchema).optional(), name: z.lazy(() => SortOrderSchema).optional(), createdAt: z.lazy(() => SortOrderSchema).optional(), updatedAt: z.lazy(() => SortOrderSchema).optional(), orders: z.lazy(() => OrderOrderByRelationAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
