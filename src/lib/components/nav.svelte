<script>
  import { pages, siteName } from '@lib/site-config'
  import { goto } from '$app/navigation';
  import Logo from '@icons/logo.svelte'

  export let sucursales;
</script>

<div class="navbar absolute bg-transparent z-50 ">
  
  <div class="navbar-start">
    <!-- <button class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button> -->

    <!-- <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">1 Producto</span>
          <span class="text-info">Subtotal: $119</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">Ver Orden</button>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> -->

    <div class="dropdown not-prose">

      <a href="/sucursales" class=" btn btn-ghost border-base-content/20 btn-circle md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ">
          <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
        </svg>
        <span class="hidden md:block ">Sucursales</span>
      </a>

      <a href="/sucursales" class="btn btn-ghost border-base-content/20 hidden md:flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-1">
          <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
        </svg>
        <span class="hidden md:block ">Sucursales</span>
      </a>
      
      <!-- <label tabindex="0" class="btn hidden btn-ghost border-base-content/20 btn-circle md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ">
          <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
        </svg>
        <span class="hidden md:block ">Sucursales</span>
      </label>

      <label tabindex="0" class="btn hidden btn-ghost border-base-content/20 hidden md:flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-1">
          <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
        </svg>
        <span class="hidden md:block ">Sucursales</span>
      </label> 
      
      
      <div tabindex="0" class="dropdown-content card card-compact w-[90vw] md:w-80 shadow border-[0.5px] border-base-300 h-96 overflow-y-auto p-2 shadow bg-base-100 text-base-content mt-2">
      <div class="card-body">
        
        <h3 class="card-title">Sucursales</h3>
        {#each sucursales.sucursales as item}
          <a data-sveltekit-prefetch on:click|preventDefault={() => goto('/'+ item.id +'/menu')} href="/{item.id}/menu" class="btn">{item.nombre}</a>
        {/each}
         
      </div>

      </div>-->
    
    </div>


  </div>

  <div class="navbar-center">
    <a class="pr-2" href="/"><Logo /></a>
  </div>

  <div class="navbar-end">
    <div class="dropdown dropdown-end ">
      <label tabindex="0" class="btn btn-ghost border-base-content/20 btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" data-theme="light" class="menu dropdown-content mt-3 p-2  shadow bg-base-100 border-[0.5px] border-base-300 rounded-box w-52">
        <!-- <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li> -->
        {#each pages as { title, path }}
        <li><a data-sveltekit-prefetch href={path} >{title}</a></li>
      {/each}
      </ul>
    </div>
  </div>
</div>

<!-- <div data-theme="dark" class="absolute hidden bg-transparent text-neutral-content top-0 z-50 navbar">
  

  <div class="mx-2 px-2 hidden navbar-star lg:flex">
    <div class="flex items-stretch">
      {#each pages as { title, path }}
        <a
          data-sveltekit-prefetch
          href={path}
          class="rounded-btn btn btn-ghost btn-sm">{title}</a
        >
      {/each}
    </div>
  </div>

  <div class="mx-auto px-2 navbar-center">
    <a href="/"><Logo /></a>
  </div>

  <div class="navbar-end">

    <div class="dropdown dropdown-end not-prose">
      <label tabindex="0" class="btn m-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-1">
          <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
        </svg>
        <span class="hidden md:block ">Sucursales</span>
      </label>
      
      <div tabindex="0" class="dropdown-content card card-compact w-64 h-96 overflow-y-auto p-2 shadow bg-base-100 text-base-content mt-2">
      <div class="card-body">
        
        <h3 class="card-title">Sucursales</h3>
        {#each sucursales.sucursales as item}
          <a data-sveltekit-prefetch on:click|preventDefault={() => goto('/'+ item.id +'/menu')} href="/{item.id}/menu" class="btn">{item.nombre}</a>
        {/each}
         
      </div>

      </div>
    
    </div>
    
    <div class="dropdown dropdown-end lg:hidden">
      <div tabindex="0" class="m-1 btn">
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
        </svg>
        
      </div>

      <ul tabindex="0" class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content" >
        {#each pages as { title, path }}
          <li class="menu-item">
            <a href={path}>{title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div> -->
