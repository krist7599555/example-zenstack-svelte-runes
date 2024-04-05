/* eslint-disable */
import { z } from 'zod';
import { OrderInputSchema } from '../input/OrderInput.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectSchema: SchemaType = z.object({
    orders: z.union([z.boolean(),
    z.lazy(() => OrderInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
