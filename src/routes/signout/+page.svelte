<script lang="ts">
import { invalidateAll } from '$app/navigation';
import type { PageData } from './$types';

$effect(() => {
  invalidateAll();
});
</script>
