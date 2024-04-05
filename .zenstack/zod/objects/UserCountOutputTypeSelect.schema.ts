/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectSchema: SchemaType = z.object({
    orders: z.boolean().optional()
}).strict() as SchemaType;
