/* eslint-disable */
const metadata = {
        models: {
            auth: {
                name: 'Auth',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]}],
                        },username: {
                            name: "username",
                            type: "String",
                            attributes: [{"name":"@unique","args":[]}],
                        },password: {
                            name: "password",
                            type: "String",
                            attributes: [{"name":"@password","args":[]}],
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },username: {
                                                    name: "username",
                                                    fields: ["username"]
                                                },
                }
                ,
                attributes: [{"name":"@@allow","args":[{"value":"all"}]}],
            }
            ,
            user: {
                name: 'User',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]}],
                        },phone: {
                            name: "phone",
                            type: "String",
                            attributes: [{"name":"@unique","args":[]},{"name":"@length","args":[{"value":10}]}],
                        },name: {
                            name: "name",
                            type: "String",
                        },orders: {
                            name: "orders",
                            type: "Order",
                            isDataModel: true,
                            isArray: true,
                            backLink: 'user',
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },phone: {
                                                    name: "phone",
                                                    fields: ["phone"]
                                                },
                }
                ,
                attributes: [{"name":"@@allow","args":[{"value":"all"}]}],
            }
            ,
            product: {
                name: 'Product',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]}],
                        },name: {
                            name: "name",
                            type: "String",
                        },description: {
                            name: "description",
                            type: "String",
                            attributes: [{"name":"@default","args":[{"value":""}]}],
                        },price: {
                            name: "price",
                            type: "Int",
                        },orderItems: {
                            name: "orderItems",
                            type: "OrderItem",
                            isDataModel: true,
                            isArray: true,
                            backLink: 'product',
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
                attributes: [{"name":"@@allow","args":[{"value":"all"}]}],
            }
            ,
            order: {
                name: 'Order',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]}],
                        },items: {
                            name: "items",
                            type: "OrderItem",
                            isDataModel: true,
                            isArray: true,
                            backLink: 'order',
                        },user: {
                            name: "user",
                            type: "User",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[]}],
                            backLink: 'orders',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"userId"},
                        },userId: {
                            name: "userId",
                            type: "String",
                            isForeignKey: true,
                            relationField: 'user',
                        },price: {
                            name: "price",
                            type: "Int",
                        },note: {
                            name: "note",
                            type: "String",
                            attributes: [{"name":"@default","args":[{"value":""}]}],
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
                attributes: [{"name":"@@allow","args":[{"value":"all"}]}],
            }
            ,
            orderItem: {
                name: 'OrderItem',fields: {
                    id: {
                            name: "id",
                            type: "String",
                            isId: true,
                            attributes: [{"name":"@id","args":[]},{"name":"@default","args":[]}],
                        },orderId: {
                            name: "orderId",
                            type: "String",
                            isForeignKey: true,
                            relationField: 'order',
                        },order: {
                            name: "order",
                            type: "Order",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[]}],
                            backLink: 'items',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"orderId"},
                        },productId: {
                            name: "productId",
                            type: "String",
                            isForeignKey: true,
                            relationField: 'product',
                        },product: {
                            name: "product",
                            type: "Product",
                            isDataModel: true,
                            attributes: [{"name":"@relation","args":[]}],
                            backLink: 'orderItems',
                            isRelationOwner: true,
                            foreignKeyMapping: {"id":"productId"},
                        },price: {
                            name: "price",
                            type: "Int",
                        },note: {
                            name: "note",
                            type: "String",
                            attributes: [{"name":"@default","args":[{"value":""}]}],
                        },createdAt: {
                            name: "createdAt",
                            type: "DateTime",
                            attributes: [{"name":"@default","args":[]}],
                        },updatedAt: {
                            name: "updatedAt",
                            type: "DateTime",
                            attributes: [{"name":"@updatedAt","args":[]}],
                        },
                }
                ,uniqueConstraints: {
                    id: {
                                                    name: "id",
                                                    fields: ["id"]
                                                },
                }
                ,
                attributes: [{"name":"@@allow","args":[{"value":"all"}]}],
            }
            ,
        }
        ,
        deleteCascade: {
        }
        ,
        authModel: 'User'
    };
export default metadata;