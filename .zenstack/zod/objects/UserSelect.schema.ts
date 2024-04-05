/* eslint-disable */
import { z } from 'zod';
import { OrderInputSchema } from '../input/OrderInput.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), phone: z.boolean().optional(), name: z.boolean().optional(), orders: z.union([z.boolean(),
    z.lazy(() => OrderInputSchema.findMany)]).optional(), createdAt: z.boolean().optional(), updatedAt: z.boolean().optional(), _count: z.union([z.boolean(),
    z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
