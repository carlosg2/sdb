<script>
  import Footer from '@components/footer.svelte'
  import Nav from '@components/nav.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'
  import '../prism.css'

  export let data;


  onMount(async () => {
    themeChange(false)
  })
</script>

<Nav sucursales="{data}"  />

<slot  />

<Footer />

<!-- <p class="w-full text-sm opacity-30 text-center p-4">{data.ip} / {data.city} / {data.country} / {data.region} / {data.latitude},{data.longitude} /{data.timezone}</p> -->

 