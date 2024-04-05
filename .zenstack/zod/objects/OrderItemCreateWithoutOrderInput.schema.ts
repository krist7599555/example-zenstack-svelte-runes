/* eslint-disable */
import { z } from 'zod';
import { ProductCreateNestedOneWithoutOrderItemsInputObjectSchema } from './ProductCreateNestedOneWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemCreateWithoutOrderInput>;
export const OrderItemCreateWithoutOrderInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), price: z.number(), note: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputObjectSchema)
}).strict() as SchemaType;
