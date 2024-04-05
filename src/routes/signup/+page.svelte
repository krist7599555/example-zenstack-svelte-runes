<script lang="ts">
import { enhance } from '$app/forms';

let { form } = $props();
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
  <h1 class="text-5xl font-extrabold">Sign up</h1>
  <form class="mt-16 flex flex-col gap-8 text-2xl" method="post" use:enhance>
    {#if form?.dup}
      <p class="text-red-600 my-2">Username aready registered!</p>
    {/if}
    <div>
      <label for="username" class="inline-block w-32"> Username </label>
      <input
        id="username"
        name="username"
        type="username"
        value={form?.username ?? ''}
        class="ml-4 w-72 rounded border p-2"
      />
    </div>
    <div>
      <label for="password" class="inline-block w-32"> Password </label>
      <input id="password" name="password" type="password" class="ml-4 w-72 rounded border p-2" />
    </div>
    <input
      type="submit"
      value="Create account"
      class="cursor-pointer rounded border border-gray-500 py-4"
    />
    <div class="mt-2 text-base font-medium text-gray-300">
      Already have an account?{' '}
      <a href="/signin" class="text-primary-700 underline"> Login here </a>
    </div>
  </form>
</div>
