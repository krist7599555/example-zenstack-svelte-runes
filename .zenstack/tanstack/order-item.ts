/* eslint-disable */
import type { Prisma, OrderItem } from "@prisma-app/client";
import { derived } from 'svelte/store';
import type { MutationOptions, CreateQueryOptions, CreateInfiniteQueryOptions } from '@tanstack/svelte-query';
import type { InfiniteData, StoreOrVal } from '@tanstack/svelte-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/svelte';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/svelte';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateOrderItem(options?: Omit<(MutationOptions<(OrderItem | undefined), DefaultError, Prisma.OrderItemCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderItemCreateArgs, DefaultError, OrderItem, true>('OrderItem', 'POST', `${endpoint}/orderItem/create`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderItemCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderItemCreateArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, OrderItem, Prisma.OrderItemGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OrderItemCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, OrderItem, Prisma.OrderItemGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useCreateManyOrderItem(options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OrderItemCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderItemCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('OrderItem', 'POST', `${endpoint}/orderItem/createMany`, metadata, options, fetch, false)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderItemCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderItemCreateManyArgs>,
            options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OrderItemCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useFindManyOrderItem<TArgs extends Prisma.OrderItemFindManyArgs, TQueryFnData = Array<Prisma.OrderItemGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderItemFindManyArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OrderItem', `${endpoint}/orderItem/findMany`, args, options, fetch);
}

export function useInfiniteFindManyOrderItem<TArgs extends Prisma.OrderItemFindManyArgs, TQueryFnData = Array<Prisma.OrderItemGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderItemFindManyArgs>, options?: StoreOrVal<Omit<CreateInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey'>>) {
    options = options ?? { initialPageParam: undefined, getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('OrderItem', `${endpoint}/orderItem/findMany`, args, options, fetch);
}

export function useFindUniqueOrderItem<TArgs extends Prisma.OrderItemFindUniqueArgs, TQueryFnData = Prisma.OrderItemGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.OrderItemFindUniqueArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OrderItem', `${endpoint}/orderItem/findUnique`, args, options, fetch);
}

export function useFindFirstOrderItem<TArgs extends Prisma.OrderItemFindFirstArgs, TQueryFnData = Prisma.OrderItemGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderItemFindFirstArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OrderItem', `${endpoint}/orderItem/findFirst`, args, options, fetch);
}

export function useUpdateOrderItem(options?: Omit<(MutationOptions<(OrderItem | undefined), DefaultError, Prisma.OrderItemUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderItemUpdateArgs, DefaultError, OrderItem, true>('OrderItem', 'PUT', `${endpoint}/orderItem/update`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderItemUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderItemUpdateArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, OrderItem, Prisma.OrderItemGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OrderItemUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, OrderItem, Prisma.OrderItemGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useUpdateManyOrderItem(options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OrderItemUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderItemUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('OrderItem', 'PUT', `${endpoint}/orderItem/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderItemUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderItemUpdateManyArgs>,
            options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OrderItemUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useUpsertOrderItem(options?: Omit<(MutationOptions<(OrderItem | undefined), DefaultError, Prisma.OrderItemUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderItemUpsertArgs, DefaultError, OrderItem, true>('OrderItem', 'POST', `${endpoint}/orderItem/upsert`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderItemUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderItemUpsertArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, OrderItem, Prisma.OrderItemGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OrderItemUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, OrderItem, Prisma.OrderItemGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useDeleteOrderItem(options?: Omit<(MutationOptions<(OrderItem | undefined), DefaultError, Prisma.OrderItemDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderItemDeleteArgs, DefaultError, OrderItem, true>('OrderItem', 'DELETE', `${endpoint}/orderItem/delete`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderItemDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderItemDeleteArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, OrderItem, Prisma.OrderItemGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.OrderItemDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, OrderItem, Prisma.OrderItemGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useDeleteManyOrderItem(options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.OrderItemDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.OrderItemDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('OrderItem', 'DELETE', `${endpoint}/orderItem/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.OrderItemDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.OrderItemDeleteManyArgs>,
            options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.OrderItemDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useAggregateOrderItem<TArgs extends Prisma.OrderItemAggregateArgs, TQueryFnData = Prisma.GetOrderItemAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.OrderItemAggregateArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OrderItem', `${endpoint}/orderItem/aggregate`, args, options, fetch);
}

export function useGroupByOrderItem<TArgs extends Prisma.OrderItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.OrderItemGroupByArgs['orderBy'] } : { orderBy?: Prisma.OrderItemGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.OrderItemGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.OrderItemGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.OrderItemGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.OrderItemGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.OrderItemGroupByArgs, OrderByArg> & InputErrors>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OrderItem', `${endpoint}/orderItem/groupBy`, args, options, fetch);
}

export function useCountOrderItem<TArgs extends Prisma.OrderItemCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.OrderItemCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.OrderItemCountArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('OrderItem', `${endpoint}/orderItem/count`, args, options, fetch);
}
