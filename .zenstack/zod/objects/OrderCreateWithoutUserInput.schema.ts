/* eslint-disable */
import { z } from 'zod';
import { OrderItemCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemCreateNestedManyWithoutOrderInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderCreateWithoutUserInput>;
export const OrderCreateWithoutUserInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), price: z.number(), note: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), items: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputObjectSchema).optional()
}).strict() as SchemaType;
