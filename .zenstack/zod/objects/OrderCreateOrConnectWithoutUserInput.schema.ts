/* eslint-disable */
import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutUserInputObjectSchema } from './OrderCreateWithoutUserInput.schema';
import { OrderUncheckedCreateWithoutUserInputObjectSchema } from './OrderUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderCreateOrConnectWithoutUserInput>;
export const OrderCreateOrConnectWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => OrderCreateWithoutUserInputObjectSchema),
    z.lazy(() => OrderUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
