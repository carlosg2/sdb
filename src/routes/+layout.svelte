<script>
  import Footer from '@components/footer.svelte'
  import { page } from '$app/stores'
  import { fly } from 'svelte/transition'
  import Nav from '@components/nav.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'
  import '../prism.css'

  export let data;


  onMount(async () => {
    themeChange(false)
  })

  $: url = String($page.url).split("#")[0];
</script>



<Nav sucursales="{data}"  />

{#key {url} }
<div in:fly={{ y: -10, duration:300, delay:300 }}
     >
<slot  />
</div>

{/key}

<Footer />

<!-- <p class="w-full text-sm opacity-30 text-center p-4">{data.ip} / {data.city} / {data.country} / {data.region} / {data.latitude},{data.longitude} /{data.timezone}</p> -->

 