/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    price: z.number(),
    note: z.string().default(""),
    createdAt: z.coerce.date().default(() => new Date()),
    updatedAt: z.coerce.date(),
}
);
const relationSchema = z.object({
    items: z.array(z.unknown()).optional(),
    user: z.record(z.unknown()),
}
);
const fkSchema = z.object({
    userId: z.string(),
}
);

/**
 * `Order` schema excluding foreign keys and relations.
 */
export const OrderScalarSchema = baseSchema;


/**
 * `Order` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const OrderSchema = OrderScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const OrderPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const OrderPrismaUpdateSchema = z.object({
    id: z.string(),
    price: z.union([z.number(), z.record(z.unknown())]),
    note: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).partial();


/**
 * `Order` schema for create operations excluding foreign keys and relations.
 */
export const OrderCreateScalarSchema = baseSchema.partial({
    id: true, note: true, createdAt: true, updatedAt: true
});


/**
 * `Order` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const OrderCreateSchema = OrderCreateScalarSchema.merge(fkSchema);


/**
 * `Order` schema for update operations excluding foreign keys and relations.
 */
export const OrderUpdateScalarSchema = baseSchema.partial();


/**
 * `Order` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const OrderUpdateSchema = OrderUpdateScalarSchema.merge(fkSchema.partial());

