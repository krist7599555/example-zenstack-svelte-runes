/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    username: z.string(),
    password: z.string(),
}
);

/**
 * `Auth` schema excluding foreign keys and relations.
 */
export const AuthScalarSchema = baseSchema;


/**
 * `Auth` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const AuthSchema = AuthScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const AuthPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const AuthPrismaUpdateSchema = z.object({
    id: z.string(),
    username: z.string(),
    password: z.string()
}).partial();


/**
 * `Auth` schema for create operations excluding foreign keys and relations.
 */
export const AuthCreateScalarSchema = baseSchema.partial({
    id: true
});


/**
 * `Auth` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const AuthCreateSchema = baseSchema.partial({
    id: true
});


/**
 * `Auth` schema for update operations excluding foreign keys and relations.
 */
export const AuthUpdateScalarSchema = baseSchema.partial();


/**
 * `Auth` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const AuthUpdateSchema = AuthUpdateScalarSchema;

