/* eslint-disable */
import { z } from 'zod';
import { ProductCreateWithoutOrderItemsInputObjectSchema } from './ProductCreateWithoutOrderItemsInput.schema';
import { ProductUncheckedCreateWithoutOrderItemsInputObjectSchema } from './ProductUncheckedCreateWithoutOrderItemsInput.schema';
import { ProductCreateOrConnectWithoutOrderItemsInputObjectSchema } from './ProductCreateOrConnectWithoutOrderItemsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductCreateNestedOneWithoutOrderItemsInput>;
export const ProductCreateNestedOneWithoutOrderItemsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => ProductCreateWithoutOrderItemsInputObjectSchema),
    z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrderItemsInputObjectSchema).optional(), connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
