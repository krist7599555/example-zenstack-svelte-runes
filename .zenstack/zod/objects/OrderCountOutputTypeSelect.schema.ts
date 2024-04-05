/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.OrderCountOutputTypeSelect>;
export const OrderCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    items: z.boolean().optional()
}).strict() as SchemaType;
