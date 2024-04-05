/* eslint-disable */
import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { OrderItemListRelationFilterObjectSchema } from './OrderItemListRelationFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderWhereInput>;
export const OrderWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => OrderWhereInputObjectSchema),
    z.lazy(() => OrderWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => OrderWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => OrderWhereInputObjectSchema),
    z.lazy(() => OrderWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), userId: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), price: z.union([z.lazy(() => IntFilterObjectSchema),
    z.number()]).optional(), note: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), items: z.lazy(() => OrderItemListRelationFilterObjectSchema).optional(), user: z.union([z.lazy(() => UserRelationFilterObjectSchema),
    z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict() as SchemaType;
