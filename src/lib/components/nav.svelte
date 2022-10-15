<script>
  import { pages, siteName } from '@lib/site-config'

  import logo from '@icons/logo.svelte'
    import Logo from '@icons/logo.svelte'
</script>

<div class="bg-black shadow-lg text-neutral-content top-0 z-10 navbar">
  <div class="mx-2 px-2 navbar-start">
    <Logo />
    <!-- <span class="font-bold text-lg">{siteName}</span> -->
  </div>
  
  <div class="mx-2 px-2 hidden navbar-center lg:flex">
    <div class="flex items-stretch">
      {#each pages as { title, path }}
        <a
          sveltekit:prefetch
          href={path}
          class="rounded-btn btn btn-ghost btn-sm">{title}</a
        >
      {/each}
    </div>
  </div>
  <div class="navbar-end">
    
    <div class="dropdown dropdown-left lg:hidden">
      <div tabindex="0" class="m-1 btn">Menu</div>
      <ul
        tabindex="0" class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content "
      >
        {#each pages as { title, path }}
          <li>
            <a sveltekit:prefetch href={path}>{title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
