/* eslint-disable */
import { z } from 'zod';
import { OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema';
import { OrderItemUpdateManyMutationInputObjectSchema } from './OrderItemUpdateManyMutationInput.schema';
import { OrderItemUncheckedUpdateManyWithoutProductInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutProductInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutProductInput>;
export const OrderItemUpdateManyWithWhereWithoutProductInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrderItemScalarWhereInputObjectSchema), data: z.union([z.lazy(() => OrderItemUpdateManyMutationInputObjectSchema),
    z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict() as SchemaType;
