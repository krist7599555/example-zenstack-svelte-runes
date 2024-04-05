/* eslint-disable */
import { z } from 'zod';
import { OrderItemSelectObjectSchema } from './OrderItemSelect.schema';
import { OrderItemIncludeObjectSchema } from './OrderItemInclude.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderItemArgs>;
export const OrderItemArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => OrderItemSelectObjectSchema).optional(), include: z.lazy(() => OrderItemIncludeObjectSchema).optional()
}).strict() as SchemaType;
