/* eslint-disable */
import { type QueryContext, type CrudContract, allFieldsEqual, type PolicyDef } from "@zenstackhq/runtime";

function Auth_create(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function Auth_create_input(input: any, context: QueryContext): boolean {
    const user: any = context.user ?? null;
    return (user != null)
}

function Auth_update(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function Auth_read(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function Auth_delete(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function User_create(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function User_create_input(input: any, context: QueryContext): boolean {
    const user: any = context.user ?? null;
    return (user != null)
}

function User_update(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function User_read(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function User_delete(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function Product_create(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function Product_create_input(input: any, context: QueryContext): boolean {
    const user: any = context.user ?? null;
    return (user != null)
}

function Product_update(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function Product_read(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function Product_delete(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function Order_create(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function Order_create_input(input: any, context: QueryContext): boolean {
    const user: any = context.user ?? null;
    return (user != null)
}

function Order_update(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function Order_read(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function Order_delete(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function OrderItem_create(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function OrderItem_create_input(input: any, context: QueryContext): boolean {
    const user: any = context.user ?? null;
    return (user != null)
}

function OrderItem_update(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function OrderItem_read(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

function OrderItem_delete(context: QueryContext, db: CrudContract): any {
    const user: any = context.user ?? null;
    if ((user != null)) { return { AND: [] }; }return { OR: [] };
}

const policy: PolicyDef = {
        guard:{
            auth:{
                create: Auth_create,create_input: Auth_create_input,update: Auth_update,postUpdate: true,read: Auth_read,delete: Auth_delete,
            },user:{
                create: User_create,create_input: User_create_input,update: User_update,postUpdate: true,read: User_read,delete: User_delete,
            },product:{
                create: Product_create,create_input: Product_create_input,update: Product_update,postUpdate: true,read: Product_read,delete: Product_delete,
            },order:{
                create: Order_create,create_input: Order_create_input,update: Order_update,postUpdate: true,read: Order_read,delete: Order_delete,
            },orderItem:{
                create: OrderItem_create,create_input: OrderItem_create_input,update: OrderItem_update,postUpdate: true,read: OrderItem_read,delete: OrderItem_delete,
            },
        }
        ,
        validation:{
            auth:{
                hasValidation: false
            }
            ,
            user:{
                hasValidation: true
            }
            ,
            product:{
                hasValidation: false
            }
            ,
            order:{
                hasValidation: false
            }
            ,
            orderItem:{
                hasValidation: false
            }
            ,
        }
    };
export default policy
