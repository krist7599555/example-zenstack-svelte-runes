/* eslint-disable */
import { z } from 'zod';

export const OrderScalarFieldEnumSchema = z.enum(["id", "userId", "price", "note", "createdAt", "updatedAt"])
