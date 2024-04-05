/* eslint-disable */
import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutProductInputObjectSchema } from './OrderItemUpdateWithoutProductInput.schema';
import { OrderItemUncheckedUpdateWithoutProductInputObjectSchema } from './OrderItemUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutProductInput>;
export const OrderItemUpdateWithWhereUniqueWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => OrderItemUpdateWithoutProductInputObjectSchema),
    z.lazy(() => OrderItemUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
