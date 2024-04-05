/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemUncheckedCreateWithoutOrderInput>;
export const OrderItemUncheckedCreateWithoutOrderInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), productId: z.string(), price: z.number(), note: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()])
}).strict() as SchemaType;
