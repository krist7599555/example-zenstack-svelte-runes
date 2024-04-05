/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AuthCountOrderByAggregateInputObjectSchema } from './AuthCountOrderByAggregateInput.schema';
import { AuthMaxOrderByAggregateInputObjectSchema } from './AuthMaxOrderByAggregateInput.schema';
import { AuthMinOrderByAggregateInputObjectSchema } from './AuthMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.AuthOrderByWithAggregationInput>;
export const AuthOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), username: z.lazy(() => SortOrderSchema).optional(), password: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => AuthCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => AuthMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => AuthMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
