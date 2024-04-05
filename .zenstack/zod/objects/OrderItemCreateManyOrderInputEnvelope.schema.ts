/* eslint-disable */
import { z } from 'zod';
import { OrderItemCreateManyOrderInputObjectSchema } from './OrderItemCreateManyOrderInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemCreateManyOrderInputEnvelope>;
export const OrderItemCreateManyOrderInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => OrderItemCreateManyOrderInputObjectSchema),
    z.lazy(() => OrderItemCreateManyOrderInputObjectSchema).array()])
}).strict() as SchemaType;
