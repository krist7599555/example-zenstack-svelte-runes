
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma-app/client';

;
import { OrderItemSelectObjectSchema } from '../objects/OrderItemSelect.schema';
import { OrderItemIncludeObjectSchema } from '../objects/OrderItemInclude.schema';
import { OrderItemWhereUniqueInputObjectSchema } from '../objects/OrderItemWhereUniqueInput.schema';
import { OrderItemWhereInputObjectSchema } from '../objects/OrderItemWhereInput.schema';
import { OrderItemOrderByWithRelationInputObjectSchema } from '../objects/OrderItemOrderByWithRelationInput.schema';
import { OrderItemScalarFieldEnumSchema } from '../enums/OrderItemScalarFieldEnum.schema';
import { OrderItemCreateInputObjectSchema } from '../objects/OrderItemCreateInput.schema';
import { OrderItemUncheckedCreateInputObjectSchema } from '../objects/OrderItemUncheckedCreateInput.schema';
import { OrderItemCreateManyInputObjectSchema } from '../objects/OrderItemCreateManyInput.schema';
import { OrderItemUpdateInputObjectSchema } from '../objects/OrderItemUpdateInput.schema';
import { OrderItemUncheckedUpdateInputObjectSchema } from '../objects/OrderItemUncheckedUpdateInput.schema';
import { OrderItemUpdateManyMutationInputObjectSchema } from '../objects/OrderItemUpdateManyMutationInput.schema';
import { OrderItemUncheckedUpdateManyInputObjectSchema } from '../objects/OrderItemUncheckedUpdateManyInput.schema';
import { OrderItemCountAggregateInputObjectSchema } from '../objects/OrderItemCountAggregateInput.schema';
import { OrderItemMinAggregateInputObjectSchema } from '../objects/OrderItemMinAggregateInput.schema';
import { OrderItemMaxAggregateInputObjectSchema } from '../objects/OrderItemMaxAggregateInput.schema';
import { OrderItemAvgAggregateInputObjectSchema } from '../objects/OrderItemAvgAggregateInput.schema';
import { OrderItemSumAggregateInputObjectSchema } from '../objects/OrderItemSumAggregateInput.schema';
import { OrderItemOrderByWithAggregationInputObjectSchema } from '../objects/OrderItemOrderByWithAggregationInput.schema';
import { OrderItemScalarWhereWithAggregatesInputObjectSchema } from '../objects/OrderItemScalarWhereWithAggregatesInput.schema'

type OrderItemInputSchemaType = {
    findUnique: z.ZodType<Prisma.OrderItemFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.OrderItemFindFirstArgs>,
    findMany: z.ZodType<Prisma.OrderItemFindManyArgs>,
    create: z.ZodType<Prisma.OrderItemCreateArgs>,
    createMany: z.ZodType<Prisma.OrderItemCreateManyArgs>,
    delete: z.ZodType<Prisma.OrderItemDeleteArgs>,
    deleteMany: z.ZodType<Prisma.OrderItemDeleteManyArgs>,
    update: z.ZodType<Prisma.OrderItemUpdateArgs>,
    updateMany: z.ZodType<Prisma.OrderItemUpdateManyArgs>,
    upsert: z.ZodType<Prisma.OrderItemUpsertArgs>,
    aggregate: z.ZodType<Prisma.OrderItemAggregateArgs>,
    groupBy: z.ZodType<Prisma.OrderItemGroupByArgs>,
    count: z.ZodType<Prisma.OrderItemCountArgs>
}

export const OrderItemInputSchema = {
    findUnique: z.object({ select: z.lazy(() => OrderItemSelectObjectSchema.optional()), include: z.lazy(() => OrderItemIncludeObjectSchema.optional()), where: OrderItemWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => OrderItemSelectObjectSchema.optional()), include: z.lazy(() => OrderItemIncludeObjectSchema.optional()), where: OrderItemWhereInputObjectSchema.optional(), orderBy: z.union([OrderItemOrderByWithRelationInputObjectSchema, OrderItemOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: OrderItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(OrderItemScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => OrderItemSelectObjectSchema.optional()), include: z.lazy(() => OrderItemIncludeObjectSchema.optional()), where: OrderItemWhereInputObjectSchema.optional(), orderBy: z.union([OrderItemOrderByWithRelationInputObjectSchema, OrderItemOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: OrderItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(OrderItemScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => OrderItemSelectObjectSchema.optional()), include: z.lazy(() => OrderItemIncludeObjectSchema.optional()), data: z.union([OrderItemCreateInputObjectSchema, OrderItemUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([OrderItemCreateManyInputObjectSchema, z.array(OrderItemCreateManyInputObjectSchema)]) }), 'delete': z.object({ select: z.lazy(() => OrderItemSelectObjectSchema.optional()), include: z.lazy(() => OrderItemIncludeObjectSchema.optional()), where: OrderItemWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: OrderItemWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => OrderItemSelectObjectSchema.optional()), include: z.lazy(() => OrderItemIncludeObjectSchema.optional()), data: z.union([OrderItemUpdateInputObjectSchema, OrderItemUncheckedUpdateInputObjectSchema]), where: OrderItemWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([OrderItemUpdateManyMutationInputObjectSchema, OrderItemUncheckedUpdateManyInputObjectSchema]), where: OrderItemWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => OrderItemSelectObjectSchema.optional()), include: z.lazy(() => OrderItemIncludeObjectSchema.optional()), where: OrderItemWhereUniqueInputObjectSchema, create: z.union([OrderItemCreateInputObjectSchema, OrderItemUncheckedCreateInputObjectSchema]), update: z.union([OrderItemUpdateInputObjectSchema, OrderItemUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: OrderItemWhereInputObjectSchema.optional(), orderBy: z.union([OrderItemOrderByWithRelationInputObjectSchema, OrderItemOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: OrderItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), OrderItemCountAggregateInputObjectSchema]).optional(), _min: OrderItemMinAggregateInputObjectSchema.optional(), _max: OrderItemMaxAggregateInputObjectSchema.optional(), _avg: OrderItemAvgAggregateInputObjectSchema.optional(), _sum: OrderItemSumAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: OrderItemWhereInputObjectSchema.optional(), orderBy: z.union([OrderItemOrderByWithAggregationInputObjectSchema, OrderItemOrderByWithAggregationInputObjectSchema.array()]).optional(), having: OrderItemScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(OrderItemScalarFieldEnumSchema), _count: z.union([z.literal(true), OrderItemCountAggregateInputObjectSchema]).optional(), _min: OrderItemMinAggregateInputObjectSchema.optional(), _max: OrderItemMaxAggregateInputObjectSchema.optional(), _avg: OrderItemAvgAggregateInputObjectSchema.optional(), _sum: OrderItemSumAggregateInputObjectSchema.optional() }), count: z.object({ where: OrderItemWhereInputObjectSchema.optional(), orderBy: z.union([OrderItemOrderByWithRelationInputObjectSchema, OrderItemOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: OrderItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(OrderItemScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), OrderItemCountAggregateInputObjectSchema]).optional() })
} as OrderItemInputSchemaType;
