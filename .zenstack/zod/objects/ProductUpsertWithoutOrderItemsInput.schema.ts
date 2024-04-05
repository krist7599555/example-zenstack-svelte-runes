/* eslint-disable */
import { z } from 'zod';
import { ProductUpdateWithoutOrderItemsInputObjectSchema } from './ProductUpdateWithoutOrderItemsInput.schema';
import { ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutOrderItemsInput.schema';
import { ProductCreateWithoutOrderItemsInputObjectSchema } from './ProductCreateWithoutOrderItemsInput.schema';
import { ProductUncheckedCreateWithoutOrderItemsInputObjectSchema } from './ProductUncheckedCreateWithoutOrderItemsInput.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductUpsertWithoutOrderItemsInput>;
export const ProductUpsertWithoutOrderItemsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => ProductUpdateWithoutOrderItemsInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema)]), create: z.union([z.lazy(() => ProductCreateWithoutOrderItemsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputObjectSchema)]), where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict() as SchemaType;
