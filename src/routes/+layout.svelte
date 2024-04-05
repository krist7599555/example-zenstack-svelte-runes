<script lang="ts">
import '../app.css';
import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
import { setHooksContext } from '$zenstack/tanstack';

setHooksContext({
  endpoint: '/api/model'
});

const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <slot />
</QueryClientProvider>
