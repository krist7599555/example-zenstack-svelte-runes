
/* eslint-disable */
import { z } from 'zod';
import type { Prisma } from '@prisma-app/client';

;
import { AuthSelectObjectSchema } from '../objects/AuthSelect.schema';
;
import { AuthWhereUniqueInputObjectSchema } from '../objects/AuthWhereUniqueInput.schema';
import { AuthWhereInputObjectSchema } from '../objects/AuthWhereInput.schema';
import { AuthOrderByWithRelationInputObjectSchema } from '../objects/AuthOrderByWithRelationInput.schema';
import { AuthScalarFieldEnumSchema } from '../enums/AuthScalarFieldEnum.schema';
import { AuthCreateInputObjectSchema } from '../objects/AuthCreateInput.schema';
import { AuthUncheckedCreateInputObjectSchema } from '../objects/AuthUncheckedCreateInput.schema';
import { AuthCreateManyInputObjectSchema } from '../objects/AuthCreateManyInput.schema';
import { AuthUpdateInputObjectSchema } from '../objects/AuthUpdateInput.schema';
import { AuthUncheckedUpdateInputObjectSchema } from '../objects/AuthUncheckedUpdateInput.schema';
import { AuthUpdateManyMutationInputObjectSchema } from '../objects/AuthUpdateManyMutationInput.schema';
import { AuthUncheckedUpdateManyInputObjectSchema } from '../objects/AuthUncheckedUpdateManyInput.schema';
import { AuthCountAggregateInputObjectSchema } from '../objects/AuthCountAggregateInput.schema';
import { AuthMinAggregateInputObjectSchema } from '../objects/AuthMinAggregateInput.schema';
import { AuthMaxAggregateInputObjectSchema } from '../objects/AuthMaxAggregateInput.schema';
import { AuthOrderByWithAggregationInputObjectSchema } from '../objects/AuthOrderByWithAggregationInput.schema';
import { AuthScalarWhereWithAggregatesInputObjectSchema } from '../objects/AuthScalarWhereWithAggregatesInput.schema'

type AuthInputSchemaType = {
    findUnique: z.ZodType<Prisma.AuthFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.AuthFindFirstArgs>,
    findMany: z.ZodType<Prisma.AuthFindManyArgs>,
    create: z.ZodType<Prisma.AuthCreateArgs>,
    createMany: z.ZodType<Prisma.AuthCreateManyArgs>,
    delete: z.ZodType<Prisma.AuthDeleteArgs>,
    deleteMany: z.ZodType<Prisma.AuthDeleteManyArgs>,
    update: z.ZodType<Prisma.AuthUpdateArgs>,
    updateMany: z.ZodType<Prisma.AuthUpdateManyArgs>,
    upsert: z.ZodType<Prisma.AuthUpsertArgs>,
    aggregate: z.ZodType<Prisma.AuthAggregateArgs>,
    groupBy: z.ZodType<Prisma.AuthGroupByArgs>,
    count: z.ZodType<Prisma.AuthCountArgs>
}

export const AuthInputSchema = {
    findUnique: z.object({ select: z.lazy(() => AuthSelectObjectSchema.optional()), where: AuthWhereUniqueInputObjectSchema }), findFirst: z.object({ select: z.lazy(() => AuthSelectObjectSchema.optional()), where: AuthWhereInputObjectSchema.optional(), orderBy: z.union([AuthOrderByWithRelationInputObjectSchema, AuthOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AuthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(AuthScalarFieldEnumSchema).optional() }), findMany: z.object({ select: z.lazy(() => AuthSelectObjectSchema.optional()), where: AuthWhereInputObjectSchema.optional(), orderBy: z.union([AuthOrderByWithRelationInputObjectSchema, AuthOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AuthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(AuthScalarFieldEnumSchema).optional() }), create: z.object({ select: z.lazy(() => AuthSelectObjectSchema.optional()), data: z.union([AuthCreateInputObjectSchema, AuthUncheckedCreateInputObjectSchema]) }), createMany: z.object({ data: z.union([AuthCreateManyInputObjectSchema, z.array(AuthCreateManyInputObjectSchema)]) }), 'delete': z.object({ select: z.lazy(() => AuthSelectObjectSchema.optional()), where: AuthWhereUniqueInputObjectSchema }), deleteMany: z.object({ where: AuthWhereInputObjectSchema.optional() }), update: z.object({ select: z.lazy(() => AuthSelectObjectSchema.optional()), data: z.union([AuthUpdateInputObjectSchema, AuthUncheckedUpdateInputObjectSchema]), where: AuthWhereUniqueInputObjectSchema }), updateMany: z.object({ data: z.union([AuthUpdateManyMutationInputObjectSchema, AuthUncheckedUpdateManyInputObjectSchema]), where: AuthWhereInputObjectSchema.optional() }), upsert: z.object({ select: z.lazy(() => AuthSelectObjectSchema.optional()), where: AuthWhereUniqueInputObjectSchema, create: z.union([AuthCreateInputObjectSchema, AuthUncheckedCreateInputObjectSchema]), update: z.union([AuthUpdateInputObjectSchema, AuthUncheckedUpdateInputObjectSchema]) }), aggregate: z.object({ where: AuthWhereInputObjectSchema.optional(), orderBy: z.union([AuthOrderByWithRelationInputObjectSchema, AuthOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AuthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), AuthCountAggregateInputObjectSchema]).optional(), _min: AuthMinAggregateInputObjectSchema.optional(), _max: AuthMaxAggregateInputObjectSchema.optional() }), groupBy: z.object({ where: AuthWhereInputObjectSchema.optional(), orderBy: z.union([AuthOrderByWithAggregationInputObjectSchema, AuthOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AuthScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AuthScalarFieldEnumSchema), _count: z.union([z.literal(true), AuthCountAggregateInputObjectSchema]).optional(), _min: AuthMinAggregateInputObjectSchema.optional(), _max: AuthMaxAggregateInputObjectSchema.optional() }), count: z.object({ where: AuthWhereInputObjectSchema.optional(), orderBy: z.union([AuthOrderByWithRelationInputObjectSchema, AuthOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AuthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(AuthScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), AuthCountAggregateInputObjectSchema]).optional() })
} as AuthInputSchemaType;
