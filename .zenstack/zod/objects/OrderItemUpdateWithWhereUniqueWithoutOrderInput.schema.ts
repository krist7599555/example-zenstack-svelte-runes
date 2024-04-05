/* eslint-disable */
import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutOrderInputObjectSchema } from './OrderItemUpdateWithoutOrderInput.schema';
import { OrderItemUncheckedUpdateWithoutOrderInputObjectSchema } from './OrderItemUncheckedUpdateWithoutOrderInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput>;
export const OrderItemUpdateWithWhereUniqueWithoutOrderInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => OrderItemUpdateWithoutOrderInputObjectSchema),
    z.lazy(() => OrderItemUncheckedUpdateWithoutOrderInputObjectSchema)])
}).strict() as SchemaType;
