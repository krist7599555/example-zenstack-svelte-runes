/* eslint-disable */
import { z } from 'zod';
import { OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema';
import { OrderUpdateManyMutationInputObjectSchema } from './OrderUpdateManyMutationInput.schema';
import { OrderUncheckedUpdateManyWithoutUserInputObjectSchema } from './OrderUncheckedUpdateManyWithoutUserInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutUserInput>;
export const OrderUpdateManyWithWhereWithoutUserInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => OrderScalarWhereInputObjectSchema), data: z.union([z.lazy(() => OrderUpdateManyMutationInputObjectSchema),
    z.lazy(() => OrderUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict() as SchemaType;
