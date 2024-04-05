/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutOrdersInputObjectSchema } from './UserUpdateWithoutOrdersInput.schema';
import { UserUncheckedUpdateWithoutOrdersInputObjectSchema } from './UserUncheckedUpdateWithoutOrdersInput.schema';
import { UserCreateWithoutOrdersInputObjectSchema } from './UserCreateWithoutOrdersInput.schema';
import { UserUncheckedCreateWithoutOrdersInputObjectSchema } from './UserUncheckedCreateWithoutOrdersInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutOrdersInput>;
export const UserUpsertWithoutOrdersInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutOrdersInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutOrdersInputObjectSchema)]), create: z.union([z.lazy(() => UserCreateWithoutOrdersInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutOrdersInputObjectSchema)]), where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict() as SchemaType;
