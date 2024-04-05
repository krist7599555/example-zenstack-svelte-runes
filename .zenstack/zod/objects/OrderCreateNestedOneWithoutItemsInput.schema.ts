/* eslint-disable */
import { z } from 'zod';
import { OrderCreateWithoutItemsInputObjectSchema } from './OrderCreateWithoutItemsInput.schema';
import { OrderUncheckedCreateWithoutItemsInputObjectSchema } from './OrderUncheckedCreateWithoutItemsInput.schema';
import { OrderCreateOrConnectWithoutItemsInputObjectSchema } from './OrderCreateOrConnectWithoutItemsInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderCreateNestedOneWithoutItemsInput>;
export const OrderCreateNestedOneWithoutItemsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => OrderCreateWithoutItemsInputObjectSchema),
    z.lazy(() => OrderUncheckedCreateWithoutItemsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutItemsInputObjectSchema).optional(), connect: z.lazy(() => OrderWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
