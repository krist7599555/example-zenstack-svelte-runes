/* eslint-disable */
import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutProductInputObjectSchema } from './OrderItemCreateWithoutProductInput.schema';
import { OrderItemUncheckedCreateWithoutProductInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemCreateOrConnectWithoutProductInput>;
export const OrderItemCreateOrConnectWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => OrderItemCreateWithoutProductInputObjectSchema),
    z.lazy(() => OrderItemUncheckedCreateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
