<script lang="ts">
import { tanstackMutationRune, tanstackQueryRune } from '$lib/tanstack-runes.svelte';
import { useCreateProduct, useFindManyProduct } from '$zenstack/tanstack';
import type { Product } from '@prisma-app/client';

let created = $state({ name: '', price: 0 } satisfies Partial<Product>);

const createProduct = tanstackMutationRune(useCreateProduct());
const findManyProduct = tanstackQueryRune(useFindManyProduct({ orderBy: { createdAt: 'desc' } }));

async function createProductHandler() {
  await createProduct.mutateAsync({ data: created });
  created.name = '';
  created.price = 0;
  await findManyProduct.refetch();
}
</script>

<div class="px-4 py-4">
  <h1>Products</h1>
  <form id="create-product" on:submit|preventDefault={createProductHandler}>
    <input type="text" name="name" bind:value={created.name} required />
    <input type="number" name="price" bind:value={created.price} required />
    <button type="submit" class="bg-orange-500 text-white p-2 rounded">เพิ่ม Prodcut ใหม่</button>
  </form>
  <section>
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
          <th>createAt</th>
        </tr>
      </thead>
      <tbody>
        {#if findManyProduct.isSuccess}
          {#each findManyProduct.data as row (row.id)}
            <tr data-product-id={row.id}>
              <td>{row.name}</td>
              <td>{row.price}</td>
              <td>
                {Intl.DateTimeFormat('th', { dateStyle: 'medium', timeStyle: 'medium' }).format(
                  row.createdAt
                )}
              </td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </section>
</div>
