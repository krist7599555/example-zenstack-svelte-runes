import { createEnhancement, type EnhancementContext, type EnhancementOptions, type ZodSchemas, type AuthUser } from '@zenstackhq/runtime';
import modelMeta from './model-meta';
import policy from './policy';
const zodSchemas = undefined;

import { Prisma } from '@prisma-app/client';
import type * as _P from '@prisma-app/client';
        

namespace auth {
    type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
    export type Auth = WithRequired<Partial<_P.Auth>, 'id'|'role'>;
}


export function enhance<DbClient extends object>(prisma: DbClient, context?: EnhancementContext<auth.Auth>, options?: EnhancementOptions) {
    return createEnhancement(prisma, {
        modelMeta,
        policy,
        zodSchemas: zodSchemas as unknown as (ZodSchemas | undefined),
        prismaModule: Prisma,
        ...options
    }, context);
}         
            
    