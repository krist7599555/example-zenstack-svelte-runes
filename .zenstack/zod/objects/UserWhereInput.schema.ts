/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { OrderListRelationFilterObjectSchema } from './OrderListRelationFilter.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => UserWhereInputObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => UserWhereInputObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), phone: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), name: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), orders: z.lazy(() => OrderListRelationFilterObjectSchema).optional()
}).strict() as SchemaType;