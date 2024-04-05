/* eslint-disable */
import { z } from 'zod';
import { OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutOrderInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderUncheckedCreateWithoutUserInput>;
export const OrderUncheckedCreateWithoutUserInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), price: z.number(), note: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), items: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema).optional()
}).strict() as SchemaType;
