/* eslint-disable */
import { z } from 'zod';
import { OrderItemInputSchema } from '../input/OrderItemInput.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { OrderCountOutputTypeArgsObjectSchema } from './OrderCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderInclude>;
export const OrderIncludeObjectSchema: SchemaType = z.object({
    items: z.union([z.boolean(),
    z.lazy(() => OrderItemInputSchema.findMany)]).optional(), user: z.union([z.boolean(),
    z.lazy(() => UserArgsObjectSchema)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => OrderCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
