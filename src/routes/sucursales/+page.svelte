<script>
  import Head from '@components/head.svelte'
    import BadgeCheck from '@lib/icons/badge-check.svelte'
  import { description, siteName } from '@lib/site-config'
  import Map from '@lib/components/map.svelte'

  import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

</script>

<Head title={`Club de Pollos`} />


<!-- <section class=" absolute sticky h-40 " style="background-image: url(/assets/images/background.jpg);" >
  <Map></Map>
</section>  -->


<section class="pt-24">
  <div class="relative">
      <!-- <div class="absolute inset-0 w-screen h-full pb-20 transform opacity-50">
          <img alt="feature" src="https://cdn.devdojo.com/images/march2021/bg-gradient.png" class="absolute left-0 object-cover w-full h-full">
      </div> -->
      <div class="relative px-6 py-8 ml-auto mr-auto sm:py-16 max-w-7xl md:px-24 lg:px-16 lg:py-20">

          <div class="relative grid gap-3  sm:grid-cols-2 lg:grid-cols-4">
              
            {#each data.sucursales as sucursal}

            <a href="{sucursal.id}/menu" class="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition duration-200 bg-base-100 bg-top bg-cover  shadow-xl rounded-2xl group hover:bg-base-300 hover:shadow-2xl">
              <!-- <div class="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                  <p class="relative">
                      <svg class="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                  </p>
              </div> -->
              <p  class="font-bold text-base-content">{sucursal.nombre}</p>
              <p class="text-sm md:text-base line-clamp-2 tracking-wider leading-4 opacity-50">{sucursal.direccion} {sucursal.noexterior} {sucursal.nointerior} {sucursal.colonia}, {sucursal.ciudad}, {sucursal.estado} </p>
            </a>
              
            {/each}
            
            
            
             
          </div>
      </div>
  </div>
</section>

