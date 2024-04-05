/* eslint-disable */
import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutOrderInputObjectSchema } from './OrderItemCreateWithoutOrderInput.schema';
import { OrderItemUncheckedCreateWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateWithoutOrderInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemCreateOrConnectWithoutOrderInput>;
export const OrderItemCreateOrConnectWithoutOrderInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => OrderItemCreateWithoutOrderInputObjectSchema),
    z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputObjectSchema)])
}).strict() as SchemaType;
