/* eslint-disable */
import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutUserInputObjectSchema } from './OrderUpdateWithoutUserInput.schema';
import { OrderUncheckedUpdateWithoutUserInputObjectSchema } from './OrderUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutUserInput>;
export const OrderUpdateWithWhereUniqueWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => OrderUpdateWithoutUserInputObjectSchema),
    z.lazy(() => OrderUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
