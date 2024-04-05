/* eslint-disable */
import { z } from 'zod';
import { OrderItemInputSchema } from '../input/OrderItemInput.schema';
import { ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductInclude>;
export const ProductIncludeObjectSchema: SchemaType = z.object({
    orderItems: z.union([z.boolean(),
    z.lazy(() => OrderItemInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
