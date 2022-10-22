<script>
  import Head from '@components/head.svelte'
  import Scrolly from '@lib/components/helpers/Scrolly.svelte'
  import useScrollChild from '@apsc/scroll-child-action';

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

  export let scrollIndex = 0;

  // const json = groupBy(data, 'NAT');

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

<div class=" sticky top-0 z-10 bg-base-100 border-b-[0.5px] border-base-300 " >
  <div class="flex max-w-screen-lg mx-auto flex-nowrap text-sm font-bold overflow-x-auto  px-4 py-3 md:py-4 no-scrollbar scroll-smooth">
    {#each groups as link, index}  
      <a use:useScrollChild={scrollIndex === index ? { x: true } : false} href="#{link.category}" class:btn-primary="{scrollIndex === index}" class="btn btn-sm md:btn-md w-auto mr-2">{link.category}</a>
    {/each}
  </div>
</div>

<main class="mx-auto max-w-screen-lg relative break-normal scroll-smooth">

  <Scrolly bind:value={scrollIndex} >

  {#each groups as item}

    <div id="{item.category}"  class="scroll-mt-20 z-10 px-4 w-full items-start py-4 md:pt-12 select-none" >
      
      <div class="shrink text-2xl md:text-3xl tracking-wide font-bold pb-0 px-4">
        {item.category}
      </div>
      
      <!-- <div class=" text-sm  line-clamp-2 opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis.</div> -->

      <div class="grid grid-cols-1 md:grid-cols-2 gap-1 py-4 md:gap-4 "> 
      
        {#each item.values as item}
  
          <div class="text-base-content flex px-4 items-start borde-[0.5px] border-base-300 bg-base-100 rounded-2xl select-none" >
            
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

    </div> 
    
    

  {/each}

</Scrolly>


</main>
