/* eslint-disable */
import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutOrderItemsInputObjectSchema } from './ProductCreateWithoutOrderItemsInput.schema';
import { ProductUncheckedCreateWithoutOrderItemsInputObjectSchema } from './ProductUncheckedCreateWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductCreateOrConnectWithoutOrderItemsInput>;
export const ProductCreateOrConnectWithoutOrderItemsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ProductCreateWithoutOrderItemsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputObjectSchema)])
}).strict() as SchemaType;
