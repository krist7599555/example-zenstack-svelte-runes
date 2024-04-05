/* eslint-disable */
import { z } from 'zod';
import { OrderWhereInputObjectSchema } from './OrderWhereInput.schema';
import { OrderUpdateWithoutItemsInputObjectSchema } from './OrderUpdateWithoutItemsInput.schema';
import { OrderUncheckedUpdateWithoutItemsInputObjectSchema } from './OrderUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutItemsInput>;
export const OrderUpdateToOneWithWhereWithoutItemsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrderWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => OrderUpdateWithoutItemsInputObjectSchema),
    z.lazy(() => OrderUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict() as SchemaType;
