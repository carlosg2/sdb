<script>
  import Footer from '@components/footer.svelte'
  import Nav from '@components/nav.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import '../app.css'
  import '../prism.css'

  onMount(async () => {
    themeChange(false)
  })
</script>

<Nav />

<slot />

<Footer />
 