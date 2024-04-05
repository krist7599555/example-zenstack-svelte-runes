/* eslint-disable */
import { z } from 'zod';
import { OrderArgsObjectSchema } from './OrderArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemInclude>;
export const OrderItemIncludeObjectSchema: SchemaType = z.object({
    order: z.union([z.boolean(),
    z.lazy(() => OrderArgsObjectSchema)]).optional(), product: z.union([z.boolean(),
    z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict() as SchemaType;
