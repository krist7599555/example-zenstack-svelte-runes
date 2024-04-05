
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma-app/client';

;
import { OrderSelectObjectSchema } from '../objects/OrderSelect.schema';
import { OrderIncludeObjectSchema } from '../objects/OrderInclude.schema';
import { OrderWhereUniqueInputObjectSchema } from '../objects/OrderWhereUniqueInput.schema';
import { OrderWhereInputObjectSchema } from '../objects/OrderWhereInput.schema';
import { OrderOrderByWithRelationInputObjectSchema } from '../objects/OrderOrderByWithRelationInput.schema';
import { OrderScalarFieldEnumSchema } from '../enums/OrderScalarFieldEnum.schema';
import { OrderCreateInputObjectSchema } from '../objects/OrderCreateInput.schema';
import { OrderUncheckedCreateInputObjectSchema } from '../objects/OrderUncheckedCreateInput.schema';
import { OrderCreateManyInputObjectSchema } from '../objects/OrderCreateManyInput.schema';
import { OrderUpdateInputObjectSchema } from '../objects/OrderUpdateInput.schema';
import { OrderUncheckedUpdateInputObjectSchema } from '../objects/OrderUncheckedUpdateInput.schema';
import { OrderUpdateManyMutationInputObjectSchema } from '../objects/OrderUpdateManyMutationInput.schema';
import { OrderUncheckedUpdateManyInputObjectSchema } from '../objects/OrderUncheckedUpdateManyInput.schema';
import { OrderCountAggregateInputObjectSchema } from '../objects/OrderCountAggregateInput.schema';
import { OrderMinAggregateInputObjectSchema } from '../objects/OrderMinAggregateInput.schema';
import { OrderMaxAggregateInputObjectSchema } from '../objects/OrderMaxAggregateInput.schema';
import { OrderAvgAggregateInputObjectSchema } from '../objects/OrderAvgAggregateInput.schema';
import { OrderSumAggregateInputObjectSchema } from '../objects/OrderSumAggregateInput.schema';
import { OrderOrderByWithAggregationInputObjectSchema } from '../objects/OrderOrderByWithAggregationInput.schema';
import { OrderScalarWhereWithAggregatesInputObjectSchema } from '../objects/OrderScalarWhereWithAggregatesInput.schema'

type OrderInputSchemaType = {
    findUnique: z.ZodType<Prisma.OrderFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.OrderFindFirstArgs>,
    findMany: z.ZodType<Prisma.OrderFindManyArgs>,
    create: z.ZodType<Prisma.OrderCreateArgs>,
    createMany: z.ZodType<Prisma.OrderCreateManyArgs>,
    delete: z.ZodType<Prisma.OrderDeleteArgs>,
    deleteMany: z.ZodType<Prisma.OrderDeleteManyArgs>,
    update: z.ZodType<Prisma.OrderUpdateArgs>,
    updateMany: z.ZodType<Prisma.OrderUpdateManyArgs>,
    upsert: z.ZodType<Prisma.OrderUpsertArgs>,
    aggregate: z.ZodType<Prisma.OrderAggregateArgs>,
    groupBy: z.ZodType<Prisma.OrderGroupByArgs>,
    count: z.ZodType<Prisma.OrderCountArgs>
}

export const OrderInputSchema = {
    findUnique: z.object({ select: z.lazy(() => OrderSelectObjectSchema.optional()), include: z.lazy(() => OrderIncludeObjectSchema.optional()), where: OrderWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => OrderSelectObjectSchema.optional()), include: z.lazy(() => OrderIncludeObjectSchema.optional()), where: OrderWhereInputObjectSchema.optional(), orderBy: z.union([OrderOrderByWithRelationInputObjectSchema, OrderOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: OrderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(OrderScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => OrderSelectObjectSchema.optional()), include: z.lazy(() => OrderIncludeObjectSchema.optional()), where: OrderWhereInputObjectSchema.optional(), orderBy: z.union([OrderOrderByWithRelationInputObjectSchema, OrderOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: OrderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(OrderScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => OrderSelectObjectSchema.optional()), include: z.lazy(() => OrderIncludeObjectSchema.optional()), data: z.union([OrderCreateInputObjectSchema, OrderUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([OrderCreateManyInputObjectSchema, z.array(OrderCreateManyInputObjectSchema)]) }), 'delete': z.object({ select: z.lazy(() => OrderSelectObjectSchema.optional()), include: z.lazy(() => OrderIncludeObjectSchema.optional()), where: OrderWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: OrderWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => OrderSelectObjectSchema.optional()), include: z.lazy(() => OrderIncludeObjectSchema.optional()), data: z.union([OrderUpdateInputObjectSchema, OrderUncheckedUpdateInputObjectSchema]), where: OrderWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([OrderUpdateManyMutationInputObjectSchema, OrderUncheckedUpdateManyInputObjectSchema]), where: OrderWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => OrderSelectObjectSchema.optional()), include: z.lazy(() => OrderIncludeObjectSchema.optional()), where: OrderWhereUniqueInputObjectSchema, create: z.union([OrderCreateInputObjectSchema, OrderUncheckedCreateInputObjectSchema]), update: z.union([OrderUpdateInputObjectSchema, OrderUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: OrderWhereInputObjectSchema.optional(), orderBy: z.union([OrderOrderByWithRelationInputObjectSchema, OrderOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: OrderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), OrderCountAggregateInputObjectSchema]).optional(), _min: OrderMinAggregateInputObjectSchema.optional(), _max: OrderMaxAggregateInputObjectSchema.optional(), _avg: OrderAvgAggregateInputObjectSchema.optional(), _sum: OrderSumAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: OrderWhereInputObjectSchema.optional(), orderBy: z.union([OrderOrderByWithAggregationInputObjectSchema, OrderOrderByWithAggregationInputObjectSchema.array()]).optional(), having: OrderScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(OrderScalarFieldEnumSchema), _count: z.union([z.literal(true), OrderCountAggregateInputObjectSchema]).optional(), _min: OrderMinAggregateInputObjectSchema.optional(), _max: OrderMaxAggregateInputObjectSchema.optional(), _avg: OrderAvgAggregateInputObjectSchema.optional(), _sum: OrderSumAggregateInputObjectSchema.optional() }), count: z.object({ where: OrderWhereInputObjectSchema.optional(), orderBy: z.union([OrderOrderByWithRelationInputObjectSchema, OrderOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: OrderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(OrderScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), OrderCountAggregateInputObjectSchema]).optional() })
} as OrderInputSchemaType;
