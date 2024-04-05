/* eslint-disable */
import { z } from 'zod';
import { AuthSelectObjectSchema } from './AuthSelect.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.AuthArgs>;
export const AuthArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => AuthSelectObjectSchema).optional()
}).strict() as SchemaType;
