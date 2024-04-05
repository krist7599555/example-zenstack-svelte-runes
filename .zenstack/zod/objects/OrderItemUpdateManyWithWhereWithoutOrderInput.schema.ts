/* eslint-disable */
import { z } from 'zod';
import { OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema';
import { OrderItemUpdateManyMutationInputObjectSchema } from './OrderItemUpdateManyMutationInput.schema';
import { OrderItemUncheckedUpdateManyWithoutOrderInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutOrderInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput>;
export const OrderItemUpdateManyWithWhereWithoutOrderInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrderItemScalarWhereInputObjectSchema), data: z.union([z.lazy(() => OrderItemUpdateManyMutationInputObjectSchema),
    z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderInputObjectSchema)])
}).strict() as SchemaType;
