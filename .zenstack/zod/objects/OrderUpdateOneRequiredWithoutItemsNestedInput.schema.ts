/* eslint-disable */
import { z } from 'zod';
import { OrderCreateWithoutItemsInputObjectSchema } from './OrderCreateWithoutItemsInput.schema';
import { OrderUncheckedCreateWithoutItemsInputObjectSchema } from './OrderUncheckedCreateWithoutItemsInput.schema';
import { OrderCreateOrConnectWithoutItemsInputObjectSchema } from './OrderCreateOrConnectWithoutItemsInput.schema';
import { OrderUpsertWithoutItemsInputObjectSchema } from './OrderUpsertWithoutItemsInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateToOneWithWhereWithoutItemsInputObjectSchema } from './OrderUpdateToOneWithWhereWithoutItemsInput.schema';
import { OrderUpdateWithoutItemsInputObjectSchema } from './OrderUpdateWithoutItemsInput.schema';
import { OrderUncheckedUpdateWithoutItemsInputObjectSchema } from './OrderUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput>;
export const OrderUpdateOneRequiredWithoutItemsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => OrderCreateWithoutItemsInputObjectSchema),
    z.lazy(() => OrderUncheckedCreateWithoutItemsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutItemsInputObjectSchema).optional(), upsert: z.lazy(() => OrderUpsertWithoutItemsInputObjectSchema).optional(), connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => OrderUpdateToOneWithWhereWithoutItemsInputObjectSchema),
    z.lazy(() => OrderUpdateWithoutItemsInputObjectSchema),
    z.lazy(() => OrderUncheckedUpdateWithoutItemsInputObjectSchema)]).optional()
}).strict() as SchemaType;
