/* eslint-disable */
import { z } from 'zod';
import { OrderItemCreateNestedManyWithoutProductInputObjectSchema } from './OrderItemCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.ProductCreateInput>;
export const ProductCreateInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), name: z.string(), description: z.string().optional(), price: z.number(), createdAt: z.union([z.date().optional(), z.string().datetime().optional()]), updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]), orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict() as SchemaType;
