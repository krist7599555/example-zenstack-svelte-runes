/* eslint-disable */
import { z } from 'zod';
import { OrderItemCreateWithoutProductInputObjectSchema } from './OrderItemCreateWithoutProductInput.schema';
import { OrderItemUncheckedCreateWithoutProductInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductInput.schema';
import { OrderItemCreateOrConnectWithoutProductInputObjectSchema } from './OrderItemCreateOrConnectWithoutProductInput.schema';
import { OrderItemUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './OrderItemUpsertWithWhereUniqueWithoutProductInput.schema';
import { OrderItemCreateManyProductInputEnvelopeObjectSchema } from './OrderItemCreateManyProductInputEnvelope.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './OrderItemUpdateWithWhereUniqueWithoutProductInput.schema';
import { OrderItemUpdateManyWithWhereWithoutProductInputObjectSchema } from './OrderItemUpdateManyWithWhereWithoutProductInput.schema';
import { OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput>;
export const OrderItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => OrderItemCreateWithoutProductInputObjectSchema),
    z.lazy(() => OrderItemCreateWithoutProductInputObjectSchema).array(),
    z.lazy(() => OrderItemUncheckedCreateWithoutProductInputObjectSchema),
    z.lazy(() => OrderItemUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => OrderItemCreateOrConnectWithoutProductInputObjectSchema),
    z.lazy(() => OrderItemCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutProductInputObjectSchema),
    z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(), createMany: z.lazy(() => OrderItemCreateManyProductInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
    z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
    z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
    z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
    z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutProductInputObjectSchema),
    z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => OrderItemUpdateManyWithWhereWithoutProductInputObjectSchema),
    z.lazy(() => OrderItemUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => OrderItemScalarWhereInputObjectSchema),
    z.lazy(() => OrderItemScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
