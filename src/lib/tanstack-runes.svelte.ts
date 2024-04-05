import { get } from 'svelte/store';

export function tanstackQueryRune<T, Err>(
  readable: import('@tanstack/svelte-query').CreateQueryResult<T, Err>
) {
  let original = $state(get(readable));
  readable.subscribe((r) => {
    original = r;
  });

  // prettier-ignore
  return {
    get data() { return original.data; },
    get error() { return original.error; },
    get status() { return original.status; },
    get isSuccess() { return original.isSuccess; },
    get isPending() { return original.isPending; },
    get isError() { return original.isError; },
    get dataUpdatedAt() { return original.dataUpdatedAt; },
    async refetch() {
      const res = await original.refetch();
      return res.isSuccess;
    }
  } as any as (
    | // prettier-ignore
    { status: 'pending'; isPending: true; isSuccess: false; isError: false; data: T | undefined, error: undefined }
    // prettier-ignore
    | { status: 'success'; isPending: false; isSuccess: true; isError: false; data: T, error: undefined }
    // prettier-ignore
    | { status: 'error'; isPending: false; isSuccess: false; isError: true; data: undefined; error: Err }
  ) & {
    dataUpdatedAt: number;
    refetch: () => Promise<boolean>;
  };
}

export function tanstackMutationRune<T, Err, TVariables, TContext>(
  readable: import('@tanstack/svelte-query').CreateMutationResult<T, Err, TVariables, TContext>
) {
  let original = $state(get(readable));
  readable.subscribe((r) => {
    original = r;
  });
  // prettier-ignore
  return {
    get data() { return original.data; },
    get error() { return original.error; },
    get status() { return original.status; },
    get isSuccess() { return original.isSuccess; },
    get isPending() { return original.isPending; },
    get isError() { return original.isError; },
    get submittedAt() { return original.submittedAt; },
    async mutateAsync(variables: TVariables, options?: import('@tanstack/svelte-query').MutateOptions<T, Err, TVariables, TContext>): Promise<T> {
      const res = await original.mutateAsync(variables, options);
      return res
    }
  } as any as (
    | // prettier-ignore
    { status: 'pending'; isIdle: false; isPending: true; isSuccess: false; isError: false; data: T | undefined, error: undefined }
    // prettier-ignore
    | { status: 'success'; isIdle: false; isPending: false; isSuccess: true; isError: false; data: T, error: undefined }
    // prettier-ignore
    | { status: 'error'; isIdle: false; isPending: false; isSuccess: false; isError: true; data: undefined; error: Err }
    // prettier-ignore
    | { status: 'idle'; isIdle: true; isPending: false; isSuccess: false; isError: false; data: undefined; error: undefined }
  ) & {
    submittedAt: number;
    mutateAsync(variables: TVariables, options?: import('@tanstack/svelte-query').MutateOptions<T, Err, TVariables, TContext>): Promise<T>
  };
}
