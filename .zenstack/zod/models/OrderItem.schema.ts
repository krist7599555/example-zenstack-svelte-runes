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
    order: z.record(z.unknown()),
    product: z.record(z.unknown()),
}
);
const fkSchema = z.object({
    orderId: z.string(),
    productId: z.string(),
}
);

/**
 * `OrderItem` schema excluding foreign keys and relations.
 */
export const OrderItemScalarSchema = baseSchema;


/**
 * `OrderItem` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const OrderItemSchema = OrderItemScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const OrderItemPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const OrderItemPrismaUpdateSchema = z.object({
    id: z.string(),
    price: z.union([z.number(), z.record(z.unknown())]),
    note: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).partial();


/**
 * `OrderItem` schema for create operations excluding foreign keys and relations.
 */
export const OrderItemCreateScalarSchema = baseSchema.partial({
    id: true, note: true, createdAt: true, updatedAt: true
});


/**
 * `OrderItem` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const OrderItemCreateSchema = OrderItemCreateScalarSchema.merge(fkSchema);


/**
 * `OrderItem` schema for update operations excluding foreign keys and relations.
 */
export const OrderItemUpdateScalarSchema = baseSchema.partial();


/**
 * `OrderItem` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const OrderItemUpdateSchema = OrderItemUpdateScalarSchema.merge(fkSchema.partial());

