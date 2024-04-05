<script lang="ts">
import '../app.css';
import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
import { setHooksContext } from '$zenstack/tanstack';

setHooksContext({
  endpoint: '/api/model'
});

const queryClient = new QueryClient();
let { data } = $props();
</script>

<QueryClientProvider client={queryClient}>
  <header>
    {#if data.auth}
      name = {data.auth.username};
      <a class="bg-orange-500 text-white rounded p-2" href="/signout">signout</a>
    {/if}
  </header>
  <main>
    <slot />
  </main>
</QueryClientProvider>
