/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOrdersInputObjectSchema } from './UserCreateWithoutOrdersInput.schema';
import { UserUncheckedCreateWithoutOrdersInputObjectSchema } from './UserUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutOrdersInput>;
export const UserCreateOrConnectWithoutOrdersInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UserCreateWithoutOrdersInputObjectSchema),
    z.lazy(() => UserUncheckedCreateWithoutOrdersInputObjectSchema)])
}).strict() as SchemaType;
