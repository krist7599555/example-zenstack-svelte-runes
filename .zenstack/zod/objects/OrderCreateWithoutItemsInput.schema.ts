/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutOrdersInputObjectSchema } from './UserCreateNestedOneWithoutOrdersInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderCreateWithoutItemsInput>;
export const OrderCreateWithoutItemsInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), price: z.number(), note: z.string().optional(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), user: z.lazy(() => UserCreateNestedOneWithoutOrdersInputObjectSchema)
}).strict() as SchemaType;
