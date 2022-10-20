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

    <div class="dropdown dropdown-end not-prose">
      <label tabindex="0" class="btn btn-sm m-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
  
        Granjas
      </label>
      
      <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-base-100 text-base-content mt-2">
        <div class="card-body">
          <h3 class="card-title">Card Title</h3>
          <p>Use any element as a dropdown.</p>
        </div>
      </div>
    </div>
    
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
