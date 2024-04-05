/* eslint-disable */
import { z } from 'zod';
import { OrderWhereInputObjectSchema } from './OrderWhereInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderRelationFilter>;
export const OrderRelationFilterObjectSchema: SchemaType = z.object({
    is: z.lazy(() => OrderWhereInputObjectSchema).optional(), isNot: z.lazy(() => OrderWhereInputObjectSchema).optional()
}).strict() as SchemaType;
