/* eslint-disable */
import { z } from 'zod';
import { OrderItemInputSchema } from '../input/OrderItemInput.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { OrderCountOutputTypeArgsObjectSchema } from './OrderCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderSelect>;
export const OrderSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), items: z.union([z.boolean(),
    z.lazy(() => OrderItemInputSchema.findMany)]).optional(), user: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), userId: z.boolean().optional(), price: z.boolean().optional(), note: z.boolean().optional(), createdAt: z.boolean().optional(), updatedAt: z.boolean().optional(), _count: z.union([z.boolean(),
    z.lazy(() => OrderCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
