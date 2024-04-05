/* eslint-disable */
import { z } from 'zod';
import { OrderItemInputSchema } from '../input/OrderItemInput.schema';
import { ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductSelect>;
export const ProductSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), name: z.boolean().optional(), description: z.boolean().optional(), price: z.boolean().optional(), orderItems: z.union([z.boolean(),
    z.lazy(() => OrderItemInputSchema.findMany)]).optional(), createdAt: z.boolean().optional(), updatedAt: z.boolean().optional(), _count: z.union([z.boolean(),
    z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
