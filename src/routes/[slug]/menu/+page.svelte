<script>
  import Head from '@components/head.svelte'
  import { page } from '$app/stores'
  import Scrolly from '@lib/components/helpers/Scrolly.svelte'
  import useScrollChild from '@apsc/scroll-child-action';


  export let data
  $: tienda = data.tienda;
  $: active = String($page.url).split("#")[0];

  export let scrollIndex = 0;


</script>

<Head title={'Menú Club de Pollos - ' + tienda.store} />


<div  class="hero  bg-cover" style="background-image: url(../assets/images/background.jpg);">
  <div class="hero-overlay bg-base-200 bg-opacity-40"></div>
  <div class="hero-content text-center text-neutral-content">

    <div class="max-w-md pt-14 pb-6 text-base-content space-y-2">

      <p class="text-xs font-bold text-primary  tracking-widest uppercase">SUCURSAL</p>
      <h1 class=" text-5xl font-display font-bold ">{tienda.store}</h1>
      <p class="text-sm font-semibold tracking-widest pb-5 ">{tienda.direccion}, {tienda.ciudad}</p>

      <div class=" space-x-2">
        <a href="tel:+528122612939" class="btn btn-ghost border-base-content/20 btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="https://www.google.com/maps/search/?api=1&query={tienda.coordenadas}" rel="external" target="_blank" class="btn btn-ghost border-base-content/20 btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="/contacto" class="btn btn-ghost border-base-content/20 btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
          </svg>
        </a>        
      </div>

    </div>
  </div>
</div>



<!-- <div class="tabs justify-center tabs-boxed">
  <a class="tab tab-lg tab-lifted tab-active">Menú</a> 
  <a class="tab tab-lg tab-lifted ">Contacto</a> 
  <a class="tab tab-lg tab-lifted">Info</a>
</div> -->

<div class=" sticky top-0 z-20 bg-base-100/50 backdrop-blur-md saturate-150 border-b-[0.5px]  border-base-300 " >
  <div class="flex  max-w-screen-lg mx-auto flex-nowrap text-sm font-bold overflow-x-auto  px-4 py-3 md:py-4 no-scrollbar ">
    {#each tienda.groups as link, index}  
      <a use:useScrollChild={scrollIndex === index ? { x: true } : false} href="#{link.title}" class:btn-primary="{scrollIndex === index}" class:btn-ghost="{scrollIndex != index}" class="btn font-display border-0 text-lg md:text-xl btn-md md:btn-lg w-auto mr-2">{link.title}</a>
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
      <div class="shrink text-center text-sm font-semibold tracking-widest pt-2 ">
        {item.description}
      </div>
      
      

      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 py-4"> 
      
        {#each item.productos as item}
  
          <div class="text-base-content flex px-4 items-start  border-[0.5px] border-base-300/70 bg-base-100 rounded-2xl select-none" >
            
            <div class=" w-full relative space-y-1 py-4">
              
              <div class="flex justify-between items-center ">
                <div class="shrink text-base-content tracking-wide font-bold font-display text-lg leading-5 pb-1 capitalize">
                  {item.title}
                </div>
              </div>

              <div class="text-sm md:text-base line-clamp-2 tracking-wider leading-4 opacity-50">
                {item.description}
              </div>
  
              <div class="text-sm md:text-base text-base-content tracking-wider font-semibold flex items-center  tabular-nums opacity-50" >
                ${item.price}
              </div>
              
              
  
            </div>

            {#if item.image_url}

              <div class="ml-4 shrink-0  py-4">
                <img
                  class="rounded-md w-20 h-20 md:h-28 md:w-28"  
                  src="{item.image_url}"
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
