<script>
  import { pages, siteName } from '@lib/site-config'
  import { goto } from '$app/navigation';


    import Logo from '@icons/logo.svelte'

    export let sucursales;
</script>

<div data-theme="dark" class="bg-black shadow-lg text-neutral-content top-0 z-10 navbar">
  
  <div class="mx-2 px-2 navbar-start">
    <a href="/"><Logo /></a>

    

    
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

          <a  on:click|preventDefault={() => goto('/'+ item.id +'/menu')} 
            href="/{item.id}/menu" rel="external" class="btn">{item.nombre}</a>
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
      <ul
        tabindex="0" class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content "
      >
        {#each pages as { title, path }}
          <li class="menu-item">
            <a href={path}>{title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
