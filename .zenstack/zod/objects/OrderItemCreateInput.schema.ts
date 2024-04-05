/* eslint-disable */
import { z } from 'zod';
import { OrderCreateNestedOneWithoutItemsInputObjectSchema } from './OrderCreateNestedOneWithoutItemsInput.schema';
import { ProductCreateNestedOneWithoutOrderItemsInputObjectSchema } from './ProductCreateNestedOneWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemCreateInput>;
export const OrderItemCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), price: z.number(), note: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), order: z.lazy(() => OrderCreateNestedOneWithoutItemsInputObjectSchema), product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputObjectSchema)
}).strict() as SchemaType;
