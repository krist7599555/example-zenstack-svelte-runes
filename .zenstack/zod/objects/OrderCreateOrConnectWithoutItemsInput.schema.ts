/* eslint-disable */
import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutItemsInputObjectSchema } from './OrderCreateWithoutItemsInput.schema';
import { OrderUncheckedCreateWithoutItemsInputObjectSchema } from './OrderUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderCreateOrConnectWithoutItemsInput>;
export const OrderCreateOrConnectWithoutItemsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => OrderCreateWithoutItemsInputObjectSchema),
    z.lazy(() => OrderUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict() as SchemaType;
