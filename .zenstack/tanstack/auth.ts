/* eslint-disable */
import type { Prisma, Auth } from "@prisma-app/client";
import { derived } from 'svelte/store';
import type { MutationOptions, CreateQueryOptions, CreateInfiniteQueryOptions } from '@tanstack/svelte-query';
import type { InfiniteData, StoreOrVal } from '@tanstack/svelte-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/svelte';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/svelte';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateAuth(options?: Omit<(MutationOptions<(Auth | undefined), DefaultError, Prisma.AuthCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuthCreateArgs, DefaultError, Auth, true>('Auth', 'POST', `${endpoint}/auth/create`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.AuthCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuthCreateArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, Auth, Prisma.AuthGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.AuthCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Auth, Prisma.AuthGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useCreateManyAuth(options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.AuthCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuthCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Auth', 'POST', `${endpoint}/auth/createMany`, metadata, options, fetch, false)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.AuthCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuthCreateManyArgs>,
            options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.AuthCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useFindManyAuth<TArgs extends Prisma.AuthFindManyArgs, TQueryFnData = Array<Prisma.AuthGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AuthFindManyArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Auth', `${endpoint}/auth/findMany`, args, options, fetch);
}

export function useInfiniteFindManyAuth<TArgs extends Prisma.AuthFindManyArgs, TQueryFnData = Array<Prisma.AuthGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AuthFindManyArgs>, options?: StoreOrVal<Omit<CreateInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey'>>) {
    options = options ?? { initialPageParam: undefined, getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Auth', `${endpoint}/auth/findMany`, args, options, fetch);
}

export function useFindUniqueAuth<TArgs extends Prisma.AuthFindUniqueArgs, TQueryFnData = Prisma.AuthGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.AuthFindUniqueArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Auth', `${endpoint}/auth/findUnique`, args, options, fetch);
}

export function useFindFirstAuth<TArgs extends Prisma.AuthFindFirstArgs, TQueryFnData = Prisma.AuthGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AuthFindFirstArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Auth', `${endpoint}/auth/findFirst`, args, options, fetch);
}

export function useUpdateAuth(options?: Omit<(MutationOptions<(Auth | undefined), DefaultError, Prisma.AuthUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuthUpdateArgs, DefaultError, Auth, true>('Auth', 'PUT', `${endpoint}/auth/update`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.AuthUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuthUpdateArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, Auth, Prisma.AuthGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.AuthUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Auth, Prisma.AuthGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useUpdateManyAuth(options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.AuthUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuthUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Auth', 'PUT', `${endpoint}/auth/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.AuthUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuthUpdateManyArgs>,
            options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.AuthUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useUpsertAuth(options?: Omit<(MutationOptions<(Auth | undefined), DefaultError, Prisma.AuthUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuthUpsertArgs, DefaultError, Auth, true>('Auth', 'POST', `${endpoint}/auth/upsert`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.AuthUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuthUpsertArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, Auth, Prisma.AuthGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.AuthUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Auth, Prisma.AuthGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useDeleteAuth(options?: Omit<(MutationOptions<(Auth | undefined), DefaultError, Prisma.AuthDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuthDeleteArgs, DefaultError, Auth, true>('Auth', 'DELETE', `${endpoint}/auth/delete`, metadata, options, fetch, true)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.AuthDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuthDeleteArgs>,
            options?: Omit<(MutationOptions<(CheckSelect<T, Auth, Prisma.AuthGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.AuthDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Auth, Prisma.AuthGetPayload<T>> | undefined);
        },
    }));
    return mutation;
}

export function useDeleteManyAuth(options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.AuthDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuthDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Auth', 'DELETE', `${endpoint}/auth/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = derived(_mutation, value => ({
        ...value,
        mutateAsync: async <T extends Prisma.AuthDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuthDeleteManyArgs>,
            options?: Omit<(MutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.AuthDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await value.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useAggregateAuth<TArgs extends Prisma.AuthAggregateArgs, TQueryFnData = Prisma.GetAuthAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.AuthAggregateArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Auth', `${endpoint}/auth/aggregate`, args, options, fetch);
}

export function useGroupByAuth<TArgs extends Prisma.AuthGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.AuthGroupByArgs['orderBy'] } : { orderBy?: Prisma.AuthGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.AuthGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.AuthGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.AuthGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.AuthGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.AuthGroupByArgs, OrderByArg> & InputErrors>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Auth', `${endpoint}/auth/groupBy`, args, options, fetch);
}

export function useCountAuth<TArgs extends Prisma.AuthCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.AuthCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AuthCountArgs>, options?: (StoreOrVal<Omit<CreateQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Auth', `${endpoint}/auth/count`, args, options, fetch);
}
