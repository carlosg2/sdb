<script>
  import Head from '@components/head.svelte'

  export let data
  let { copy } = data
</script>

<Head title={`About`} />

<main class="mx-auto max-w-screen-lg relative break-normal">

  <h1 class="font-bold mb-5 text-5xl text-center">About</h1>
  <div class="mb-10 all-prose">
    <svelte:component this={copy} />
  </div>

  <div class="flex flex-col mb-20 w-full">
    <div class="divider" />
  </div>

</main>
