/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutOrdersInputObjectSchema } from './UserUpdateWithoutOrdersInput.schema';
import { UserUncheckedUpdateWithoutOrdersInputObjectSchema } from './UserUncheckedUpdateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma-app/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOrdersInput>;
export const UserUpdateToOneWithWhereWithoutOrdersInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UserUpdateWithoutOrdersInputObjectSchema),
    z.lazy(() => UserUncheckedUpdateWithoutOrdersInputObjectSchema)])
}).strict() as SchemaType;
