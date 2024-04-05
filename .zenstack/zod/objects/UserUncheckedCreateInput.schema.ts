/* eslint-disable */
import { z } from 'zod';
import { OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), phone: z.string(), name: z.string(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict() as SchemaType;
