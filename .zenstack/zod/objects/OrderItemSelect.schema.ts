/* eslint-disable */
import { z } from 'zod';
import { OrderArgsObjectSchema } from './OrderArgs.schema';
import { ProductArgsObjectSchema } from './ProductArgs.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemSelect>;
export const OrderItemSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), orderId: z.boolean().optional(), order: z.union([z.boolean(),
    z.lazy(() => OrderArgsObjectSchema)]).optional(), productId: z.boolean().optional(), product: z.union([z.boolean(),
    z.lazy(() => ProductArgsObjectSchema)]).optional(), price: z.boolean().optional(), note: z.boolean().optional(), createdAt: z.boolean().optional(), updatedAt: z.boolean().optional()
}).strict() as SchemaType;
