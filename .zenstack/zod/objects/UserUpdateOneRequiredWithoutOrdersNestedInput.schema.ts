/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutOrdersInputObjectSchema } from './UserCreateWithoutOrdersInput.schema';
import { UserUncheckedCreateWithoutOrdersInputObjectSchema } from './UserUncheckedCreateWithoutOrdersInput.schema';
import { UserCreateOrConnectWithoutOrdersInputObjectSchema } from './UserCreateOrConnectWithoutOrdersInput.schema';
import { UserUpsertWithoutOrdersInputObjectSchema } from './UserUpsertWithoutOrdersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutOrdersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutOrdersInput.schema';
import { UserUpdateWithoutOrdersInputObjectSchema } from './UserUpdateWithoutOrdersInput.schema';
import { UserUncheckedUpdateWithoutOrdersInputObjectSchema } from './UserUncheckedUpdateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput>;
export const UserUpdateOneRequiredWithoutOrdersNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UserCreateWithoutOrdersInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutOrdersInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrdersInputObjectSchema).optional(), upsert: z.lazy(() => UserUpsertWithoutOrdersInputObjectSchema).optional(), connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(), update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutOrdersInputObjectSchema),
    z.lazy(() => UserUpdateWithoutOrdersInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutOrdersInputObjectSchema)]).optional()
}).strict() as SchemaType;
