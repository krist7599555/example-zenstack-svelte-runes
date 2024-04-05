/* eslint-disable */
import { z } from 'zod';
import { OrderItemCreateManyProductInputObjectSchema } from './OrderItemCreateManyProductInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemCreateManyProductInputEnvelope>;
export const OrderItemCreateManyProductInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => OrderItemCreateManyProductInputObjectSchema),
    z.lazy(() => OrderItemCreateManyProductInputObjectSchema).array()])
}).strict() as SchemaType;
