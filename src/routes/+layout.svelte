<script>
  import Footer from '@components/footer.svelte'
  import { navigating } from '$app/stores';
  import { page } from '$app/stores'
  import { fly, fade } from 'svelte/transition'
  import Nav from '@components/nav.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'
  import '../prism.css'
  import Preloadingindicator from '@components/preloadingindicator.svelte'

  export let data;

  onMount(async () => {
    themeChange(false)
  })

  $: active = String($page.url).split("#")[0];
</script>

<Nav sucursales="{data}"  />

{#key {active} }
  <div in:fly={{ y: -15, duration:400, delay:200 }}>
    <slot/>
  </div>
{/key}

<Footer />

<!-- <p class="w-full text-sm opacity-30 text-center p-4">{data.ip} / {data.city} / {data.country} / {data.region} / {data.latitude},{data.longitude} /{data.timezone}</p> -->

{#if $navigating}
 <Preloadingindicator></Preloadingindicator>  
{/if}