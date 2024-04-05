/* eslint-disable */
import { z } from 'zod';
import { OrderItemCreateWithoutOrderInputObjectSchema } from './OrderItemCreateWithoutOrderInput.schema';
import { OrderItemUncheckedCreateWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateWithoutOrderInput.schema';
import { OrderItemCreateOrConnectWithoutOrderInputObjectSchema } from './OrderItemCreateOrConnectWithoutOrderInput.schema';
import { OrderItemCreateManyOrderInputEnvelopeObjectSchema } from './OrderItemCreateManyOrderInputEnvelope.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemCreateNestedManyWithoutOrderInput>;
export const OrderItemCreateNestedManyWithoutOrderInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => OrderItemCreateWithoutOrderInputObjectSchema),
    z.lazy(() => OrderItemCreateWithoutOrderInputObjectSchema).array(),
    z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputObjectSchema),
    z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputObjectSchema),
    z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputObjectSchema).array()]).optional(), createMany: z.lazy(() => OrderItemCreateManyOrderInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
    z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
