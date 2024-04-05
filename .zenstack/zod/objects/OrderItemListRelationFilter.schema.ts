/* eslint-disable */
import { z } from 'zod';
import { OrderItemWhereInputObjectSchema } from './OrderItemWhereInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemListRelationFilter>;
export const OrderItemListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => OrderItemWhereInputObjectSchema).optional(), some: z.lazy(() => OrderItemWhereInputObjectSchema).optional(), none: z.lazy(() => OrderItemWhereInputObjectSchema).optional()
}).strict() as SchemaType;
