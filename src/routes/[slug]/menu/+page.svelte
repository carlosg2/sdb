<script>
  import Head from '@components/head.svelte'
  import Scrolly from '@lib/components/helpers/Scrolly.svelte'
  import useScrollChild from '@apsc/scroll-child-action';


  export let data
  $: tienda = data.tienda;

  export let scrollIndex = 0;


</script>

<Head title={'Menú - Club de Pollos - ' + tienda.store} />


<div class="hero " style="background-image: url(../assets/images/background.jpg);">
  <div class="hero-overlay bg-base-100 opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md pt-24 text-base-content">
      <h1 class="mb-4 text-5xl font-display font-bold ">{tienda.store}</h1>
      <p class="text-xl font-medium mb-4 opacity-80">Ni Tigres, ni Rayados tienen estas piernas.</p>
    </div>
  </div>
</div>

<!-- <div class="tabs justify-center tabs-boxed">
  <a class="tab tab-lg tab-lifted tab-active">Menú</a> 
  <a class="tab tab-lg tab-lifted ">Contacto</a> 
  <a class="tab tab-lg tab-lifted">Info</a>
</div> -->

<div class=" sticky top-0 z-20 bg-base-100 border-b-[0.5px]  border-base-300 " >
  <div class="flex justify-center max-w-screen-lg mx-auto flex-nowrap text-sm font-bold overflow-x-auto  px-4 py-3 md:py-4 no-scrollbar ">
    {#each tienda.groups as link, index}  
      <a use:useScrollChild={scrollIndex === index ? { x: true } : false} href="#{link.title}" class:btn-primary="{scrollIndex === index}" class="btn font-display text-lg md:text-xl btn-md md:btn-lg w-auto mr-2">{link.title}</a>
    {/each}
  </div>
</div>

<main class="mx-auto max-w-screen-lg relative break-normal scroll-smooth">

  <Scrolly bind:value={scrollIndex} >

  {#each tienda.groups as item}

    <div id="{item.title}"  class="scroll-mt-20 z-10 px-4 w-full items-start py-4 pt-12 select-none" >
      
      <div class="shrink text-3xl text-center md:text-3xl tracking-wide font-bold pb-0 px-4 font-display">
        {item.title}
      </div>
      
      

      <div class="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4 py-4"> 
      
        {#each item.productos as item}
  
          <div class="text-base-content flex px-4 items-start  border-[0.5px] border-base-300/70 bg-base-100 rounded-2xl select-none" >
            
            <div class=" w-full relative py-4">
              
              <div class="flex justify-between items-center ">
                <div class="shrink text-base-content tracking-wide font-bold font-display text-lg leading-5 pb-1 capitalize">
                  {item.title}
                </div>
              </div>

              <div class="text-sm md:text-base line-clamp-2 tracking-wide leading-4 opacity-50">
                {item.description}
              </div>
  
              <div class="text-base-content font-semibold tracking-wide flex items-center space-x-1 tabular-nums opacity-80" >
                ${item.price}
              </div>
              
              
  
            </div>

            {#if item.image_url}

              <div class="ml-4 shrink-0  py-4">
                <img
                  class="rounded-md w-20 h-20 md:h-28 md:w-28"  
                  src="https://cloud.extrapos.mx/gogo/{item.image_url}"
                  alt="demo"
                />
              </div>
              
            {/if}
  
            
          </div>
  
        {/each}
  
      </div>

    </div> 
    
    

  {/each}

</Scrolly>


</main>
