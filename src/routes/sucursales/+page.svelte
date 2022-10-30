<script>
  import Head from '@components/head.svelte'
    import BadgeCheck from '@lib/icons/badge-check.svelte'
  import { description, siteName } from '@lib/site-config'
  import Map from '@lib/components/map.svelte'

  import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

  $: groups = data.sucursales.reduce((curr, val) =>
  {
    let group = curr.find(g => g.category === `${val.estado}`)
    
    if (group) {
      group.values.push(val)
    } else {
      curr.push({ category: `${val.estado}`, values: [ val ] }) 
    }
    return curr

  }, [])



</script>

<Head title={`Club de Pollos`} />


<main class="h-screen">

  <section class=" h-1/3 border-b-[0.5px] shadow-lg shadow-black  border-base-300/70"  >
    <Map></Map>
  </section> 
  

  <!-- {data.latitude},{data.longitude} -->
  
  <section class="h-2/3 overflow-y-scroll">
    <div class="relative">
        
      <!-- <div class="absolute inset-0 w-screen h-full pb-20 transform opacity-50">
            <img alt="feature" src="https://cdn.devdojo.com/images/march2021/bg-gradient.png" class="absolute left-0 object-cover w-full h-full">
        </div> -->

        <div class="relative mx-auto max-w-7xl px-6 lg:px-16 lg:py-18">
  
          {#each groups as estado, index }
          <div class="pt-8">

            <div class="shrink text-2xl text-primary md:text-3xl tracking-wide font-bold py-4 px-6 font-display">
              {estado.category}
            </div>
  
            <div class="relative grid gap-3  grid-cols-1 lg:grid-cols-4">
  
              {#each estado.values as sucursal}
                <a href="{sucursal.id}/menu" class="flex flex-col items-start justify-top p-6 space-y-2 overflow-hidden transition duration-200 border-[0.5px] border-base-300/70 bg-base-100 bg-top bg-cover  shadow-xl rounded-2xl group hover:bg-base-300 hover:shadow-2xl">
                  <div class="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-base-200 text-primary">
                      <p class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                        </svg>
                      </p>
                  </div>
                  <p  class="font-bold font-display text-xl text-base-content">{sucursal.nombre}</p>
                  <p class="text-sm md:text-base line-clamp-2 tracking-wider leading-4 opacity-50">{sucursal.direccion} {sucursal.noexterior} {sucursal.nointerior} {sucursal.colonia}, {sucursal.ciudad} </p>
                </a>
              {/each}
            </div>
          </div>
          {/each}
          
  
  
          </div>
  
        </div>
  
      </section>


</main>



