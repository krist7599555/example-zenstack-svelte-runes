/* eslint-disable */
import type { Prisma, Order } from "@prisma-app/client";
import { derived } from 'svelte/store';
import type { MutationOptions, CreateQueryOptions, CreateInfiniteQueryOptions } from '@tanstack/svelte-query';
import type { InfiniteData, StoreOrVal } from '@tanstack/svelte-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/svelte';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/svelte';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateOrder(options?: Omit<(MutationOptions<(Order | undefined), DefaultError, Prisma.OrderCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderCreateArgs, DefaultError, Order, true>('Order', 'POST', `${endpoint}/order/create`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderCreateArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, Order, Prisma.OrderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OrderCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Order, Prisma.OrderGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useCreateManyOrder(options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OrderCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Order', 'POST', `${endpoint}/order/createMany`, metadata, options, fetch, false)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderCreateManyArgs>,
            options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OrderCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useFindManyOrder<TArgs extends Prisma.OrderFindManyArgs, TQueryFnData = Array<Prisma.OrderGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderFindManyArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Order', `${endpoint}/order/findMany`, args, options, fetch);
}

export function useInfiniteFindManyOrder<TArgs extends Prisma.OrderFindManyArgs, TQueryFnData = Array<Prisma.OrderGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderFindManyArgs>, options?: StoreOrVal<Omit<CreateInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey'>>) {
    options = options ?? { initialPageParam: undefined, getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Order', `${endpoint}/order/findMany`, args, options, fetch);
}

export function useFindUniqueOrder<TArgs extends Prisma.OrderFindUniqueArgs, TQueryFnData = Prisma.OrderGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.OrderFindUniqueArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Order', `${endpoint}/order/findUnique`, args, options, fetch);
}

export function useFindFirstOrder<TArgs extends Prisma.OrderFindFirstArgs, TQueryFnData = Prisma.OrderGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderFindFirstArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Order', `${endpoint}/order/findFirst`, args, options, fetch);
}

export function useUpdateOrder(options?: Omit<(MutationOptions<(Order | undefined), DefaultError, Prisma.OrderUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderUpdateArgs, DefaultError, Order, true>('Order', 'PUT', `${endpoint}/order/update`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderUpdateArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, Order, Prisma.OrderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OrderUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Order, Prisma.OrderGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useUpdateManyOrder(options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OrderUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Order', 'PUT', `${endpoint}/order/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderUpdateManyArgs>,
            options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OrderUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useUpsertOrder(options?: Omit<(MutationOptions<(Order | undefined), DefaultError, Prisma.OrderUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderUpsertArgs, DefaultError, Order, true>('Order', 'POST', `${endpoint}/order/upsert`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderUpsertArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, Order, Prisma.OrderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OrderUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Order, Prisma.OrderGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useDeleteOrder(options?: Omit<(MutationOptions<(Order | undefined), DefaultError, Prisma.OrderDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderDeleteArgs, DefaultError, Order, true>('Order', 'DELETE', `${endpoint}/order/delete`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderDeleteArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, Order, Prisma.OrderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OrderDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Order, Prisma.OrderGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useDeleteManyOrder(options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OrderDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Order', 'DELETE', `${endpoint}/order/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderDeleteManyArgs>,
            options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OrderDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useAggregateOrder<TArgs extends Prisma.OrderAggregateArgs, TQueryFnData = Prisma.GetOrderAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.OrderAggregateArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Order', `${endpoint}/order/aggregate`, args, options, fetch);
}

export function useGroupByOrder<TArgs extends Prisma.OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.OrderGroupByArgs['orderBy'] } : { orderBy?: Prisma.OrderGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.OrderGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.OrderGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.OrderGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.OrderGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.OrderGroupByArgs, OrderByArg> & InputErrors>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Order', `${endpoint}/order/groupBy`, args, options, fetch);
}

export function useCountOrder<TArgs extends Prisma.OrderCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.OrderCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderCountArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Order', `${endpoint}/order/count`, args, options, fetch);
}
