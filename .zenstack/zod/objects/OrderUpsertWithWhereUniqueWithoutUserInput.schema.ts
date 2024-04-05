/* eslint-disable */
import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutUserInputObjectSchema } from './OrderUpdateWithoutUserInput.schema';
import { OrderUncheckedUpdateWithoutUserInputObjectSchema } from './OrderUncheckedUpdateWithoutUserInput.schema';
import { OrderCreateWithoutUserInputObjectSchema } from './OrderCreateWithoutUserInput.schema';
import { OrderUncheckedCreateWithoutUserInputObjectSchema } from './OrderUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutUserInput>;
export const OrderUpsertWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => OrderUpdateWithoutUserInputObjectSchema),
    z.lazy(() => OrderUncheckedUpdateWithoutUserInputObjectSchema)]), create: z.union([z.lazy(() => OrderCreateWithoutUserInputObjectSchema),
    z.lazy(() => OrderUncheckedCreateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
