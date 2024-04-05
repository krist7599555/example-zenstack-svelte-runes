/* eslint-disable */
import { z } from 'zod';
import { OrderUpdateWithoutItemsInputObjectSchema } from './OrderUpdateWithoutItemsInput.schema';
import { OrderUncheckedUpdateWithoutItemsInputObjectSchema } from './OrderUncheckedUpdateWithoutItemsInput.schema';
import { OrderCreateWithoutItemsInputObjectSchema } from './OrderCreateWithoutItemsInput.schema';
import { OrderUncheckedCreateWithoutItemsInputObjectSchema } from './OrderUncheckedCreateWithoutItemsInput.schema';
import { OrderWhereInputObjectSchema } from './OrderWhereInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderUpsertWithoutItemsInput>;
export const OrderUpsertWithoutItemsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => OrderUpdateWithoutItemsInputObjectSchema),
    z.lazy(() => OrderUncheckedUpdateWithoutItemsInputObjectSchema)]), create: z.union([z.lazy(() => OrderCreateWithoutItemsInputObjectSchema),
    z.lazy(() => OrderUncheckedCreateWithoutItemsInputObjectSchema)]), where: z.lazy(() => OrderWhereInputObjectSchema).optional()
}).strict() as SchemaType;
