/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().default(""),
    price: z.number(),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
}
);
const relationSchema = z.object({
    orderItems: z.array(z.unknown()).optional(),
}
);

/**
 * `Product` schema excluding foreign keys and relations.
 */
export const ProductScalarSchema = baseSchema;


/**
 * `Product` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const ProductSchema = ProductScalarSchema.merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const ProductPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const ProductPrismaUpdateSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.union([z.number(), z.record(z.unknown())]),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).partial();


/**
 * `Product` schema for create operations excluding foreign keys and relations.
 */
export const ProductCreateScalarSchema = baseSchema.partial({
    id: true, description: true, createdAt: true, updatedAt: true
});


/**
 * `Product` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const ProductCreateSchema = baseSchema.partial({
    id: true, description: true, createdAt: true, updatedAt: true
});


/**
 * `Product` schema for update operations excluding foreign keys and relations.
 */
export const ProductUpdateScalarSchema = baseSchema.partial();


/**
 * `Product` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const ProductUpdateSchema = ProductUpdateScalarSchema;

