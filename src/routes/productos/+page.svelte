<script>
  import Head from '@components/head.svelte'

  export let data
  let { products } = data

  let groups = products.reduce((curr, val) =>
  {
    let group = curr.find(g => g.category === `${val.grupo}`)
    
    if (group) {
      group.values.push(val)
    } else {
      curr.push({ category: `${val.grupo}`, values: [ val ] }) 
    }
    return curr

  }, [])

</script>

<Head title={'Menú'} />


<div class="hero " style="background-image: url(https://www.clubdepollos.com/assets/images/cesped-1920x1440.jpg);">
  <div class="hero-overlay bg-base-100 opacity-80"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md pt-4 text-base-content">
      <h1 class="mb-4 text-5xl font-bold ">Menú</h1>
      <p class="text-xl font-medium mb-4 opacity-80">Ni Tigres, ni Rayados tienen estas piernas.</p>
    </div>
  </div>
</div>

<div class="  relative break-normal sticky top-0 z-10 bg-base-100 border-b-[0.5px] border-base-300">
  <ul class="flex max-w-screen-lg mx-auto flex-nowrap text-sm font-bold overflow-x-auto px-4 py-3 md:py-4 no-scrollbar  ">
    <li><a href="#Paquetes de Remate" class="btn btn-sm btn-primary md:btn-lg mr-2">Promociones</a></li>
    <li><a href="#Paquetes Individuales" class="btn btn-sm md:btn-lg mr-2">Individuales</a></li>
    <li><a href="#Pauetes Familiares" class="btn btn-sm md:btn-lg mr-2">Familiares</a></li>
    <li><a href="#Complementos" class="btn btn-sm md:btn-lg mr-2">Complementos</a></li>
  </ul>
</div>

<main class="mx-auto max-w-screen-lg relative break-normal">

  {#each groups as item}

    <div id="{item}"  class="text-base-content scroll-pt-40 z-10 px-8 w-full items-start pb-4 pt-4 md:pt-12 select-none " >
      <div class="shrink text-2xl tracking-wide font-bold pb-1 ">
        {item.category}
      </div>
      <!-- <div class=" text-sm  line-clamp-2 opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis.</div> -->
    </div> 

    <div class="grid grid-cols-1 md:grid-cols-2 gap-1 px-4 pb-4 md:gap-4 "> 
      
      {#each item.values as item}

        <div class="text-base-content flex px-4 items-start  bg-base-100 rounded-2xl select-none" >
          
          <div class=" w-full relative py-4">
            
            <div class="flex justify-between items-center ">
              <div class="shrink text-base-content tracking-wide font-bold leading-5 capitalize">
                {item.descripcion}
              </div>
            </div>

            <div class="text-base-content font-semibold tracking-wide flex items-center space-x-1 opacity-80" >
              $ {item.precio_con_iva}
            </div>
            
            <div class="text-sm md:text-base line-clamp-2 opacity-60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

          </div>

          <div class="ml-4 shrink-0  py-4">
            <img
              class="rounded-md w-20 h-20 md:h-28 md:w-28"
              src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2{item.descripcion}"
              alt="demo"
            />
          </div>
        </div>

      {/each}

    </div>

  {/each}


</main>
