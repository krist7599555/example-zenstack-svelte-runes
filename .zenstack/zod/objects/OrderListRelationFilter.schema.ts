/* eslint-disable */
import { z } from 'zod';
import { OrderWhereInputObjectSchema } from './OrderWhereInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderListRelationFilter>;
export const OrderListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => OrderWhereInputObjectSchema).optional(), some: z.lazy(() => OrderWhereInputObjectSchema).optional(), none: z.lazy(() => OrderWhereInputObjectSchema).optional()
}).strict() as SchemaType;
