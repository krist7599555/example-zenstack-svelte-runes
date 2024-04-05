/* eslint-disable */
import { z } from 'zod';
import { ProductCountOutputTypeSelectObjectSchema } from './ProductCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductCountOutputTypeArgs>;
export const ProductCountOutputTypeArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => ProductCountOutputTypeSelectObjectSchema).optional()
}).strict() as SchemaType;