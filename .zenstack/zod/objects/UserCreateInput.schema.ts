/* eslint-disable */
import { z } from 'zod';
import { OrderCreateNestedManyWithoutUserInputObjectSchema } from './OrderCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), phone: z.string(), name: z.string(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), orders: z.lazy(() => OrderCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict() as SchemaType;
