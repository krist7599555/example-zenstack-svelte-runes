/* eslint-disable */
import { z } from 'zod';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutOrderItemsInputObjectSchema } from './ProductUpdateWithoutOrderItemsInput.schema';
import { ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutOrderItemsInput>;
export const ProductUpdateToOneWithWhereWithoutOrderItemsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ProductWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => ProductUpdateWithoutOrderItemsInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema)])
}).strict() as SchemaType;
