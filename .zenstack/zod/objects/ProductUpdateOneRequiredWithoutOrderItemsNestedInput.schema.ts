/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutOrderItemsInputObjectSchema } from './ProductCreateWithoutOrderItemsInput.schema';
import { ProductUncheckedCreateWithoutOrderItemsInputObjectSchema } from './ProductUncheckedCreateWithoutOrderItemsInput.schema';
import { ProductCreateOrConnectWithoutOrderItemsInputObjectSchema } from './ProductCreateOrConnectWithoutOrderItemsInput.schema';
import { ProductUpsertWithoutOrderItemsInputObjectSchema } from './ProductUpsertWithoutOrderItemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutOrderItemsInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutOrderItemsInput.schema';
import { ProductUpdateWithoutOrderItemsInputObjectSchema } from './ProductUpdateWithoutOrderItemsInput.schema';
import { ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutOrderItemsInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput>;
export const ProductUpdateOneRequiredWithoutOrderItemsNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutOrderItemsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrderItemsInputObjectSchema).optional(), upsert: z.lazy(() => ProductUpsertWithoutOrderItemsInputObjectSchema).optional(), connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutOrderItemsInputObjectSchema),
    z.lazy(() => ProductUpdateWithoutOrderItemsInputObjectSchema),
    z.lazy(() => ProductUncheckedUpdateWithoutOrderItemsInputObjectSchema)]).optional()
}).strict() as SchemaType;
