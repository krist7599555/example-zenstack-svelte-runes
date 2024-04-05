/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutOrdersInputObjectSchema } from './UserCreateWithoutOrdersInput.schema';
import { UserUncheckedCreateWithoutOrdersInputObjectSchema } from './UserUncheckedCreateWithoutOrdersInput.schema';
import { UserCreateOrConnectWithoutOrdersInputObjectSchema } from './UserCreateOrConnectWithoutOrdersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutOrdersInput>;
export const UserCreateNestedOneWithoutOrdersInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutOrdersInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutOrdersInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrdersInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
