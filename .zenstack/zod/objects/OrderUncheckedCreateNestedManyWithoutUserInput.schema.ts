/* eslint-disable */
import { z } from 'zod';
import { OrderCreateWithoutUserInputObjectSchema } from './OrderCreateWithoutUserInput.schema';
import { OrderUncheckedCreateWithoutUserInputObjectSchema } from './OrderUncheckedCreateWithoutUserInput.schema';
import { OrderCreateOrConnectWithoutUserInputObjectSchema } from './OrderCreateOrConnectWithoutUserInput.schema';
import { OrderCreateManyUserInputEnvelopeObjectSchema } from './OrderCreateManyUserInputEnvelope.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutUserInput>;
export const OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => OrderCreateWithoutUserInputObjectSchema),
    z.lazy(() => OrderCreateWithoutUserInputObjectSchema).array(),
    z.lazy(() => OrderUncheckedCreateWithoutUserInputObjectSchema),
    z.lazy(() => OrderUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => OrderCreateOrConnectWithoutUserInputObjectSchema),
    z.lazy(() => OrderCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(), createMany: z.lazy(() => OrderCreateManyUserInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => OrderWhereUniqueInputObjectSchema),
    z.lazy(() => OrderWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
