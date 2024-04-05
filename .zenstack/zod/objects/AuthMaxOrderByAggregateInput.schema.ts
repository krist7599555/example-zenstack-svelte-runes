/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.AuthMaxOrderByAggregateInput>;
export const AuthMaxOrderByAggregateInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), username: z.lazy(() => SortOrderSchema).optional(), password: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
