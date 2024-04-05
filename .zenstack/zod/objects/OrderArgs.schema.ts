/* eslint-disable */
import { z } from 'zod';
import { OrderSelectObjectSchema } from './OrderSelect.schema';
import { OrderIncludeObjectSchema } from './OrderInclude.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderArgs>;
export const OrderArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => OrderSelectObjectSchema).optional(), include: z.lazy(() => OrderIncludeObjectSchema).optional()
}).strict() as SchemaType;
