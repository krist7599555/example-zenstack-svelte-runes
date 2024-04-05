/* eslint-disable */
import { z } from 'zod';
import { OrderCountOutputTypeSelectObjectSchema } from './OrderCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderCountOutputTypeArgs>;
export const OrderCountOutputTypeArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => OrderCountOutputTypeSelectObjectSchema).optional()
}).strict() as SchemaType;
