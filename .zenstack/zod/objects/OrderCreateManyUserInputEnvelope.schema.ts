/* eslint-disable */
import { z } from 'zod';
import { OrderCreateManyUserInputObjectSchema } from './OrderCreateManyUserInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderCreateManyUserInputEnvelope>;
export const OrderCreateManyUserInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => OrderCreateManyUserInputObjectSchema),
    z.lazy(() => OrderCreateManyUserInputObjectSchema).array()])
}).strict() as SchemaType;
