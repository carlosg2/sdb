<script>
  import Head from '@components/head.svelte'
  import tienda from '$lib/data/menu.json';
  import Scrolly from '@lib/components/helpers/Scrolly.svelte'

  // import Scroller from '@sveltejs/svelte-scroller';
  // export let data

  export let scrollIndex = 0;

</script>

<Head title={'Menú'} />




<div class="hero " style="background-image: url(https://www.clubdepollos.com/assets/images/cesped-1920x1440.jpg);">
  <div class="hero-overlay bg-base-100 opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md pt-4 text-base-content">
      <h1 class="mb-4 text-5xl font-bold ">Menú</h1>
      <p class="text-xl font-medium mb-4">Ni Tigres, ni Rayados tienen estas piernas.</p>
    </div>
  </div>
</div>



<div class="  relative break-normal sticky top-0 z-10  bg-base-100/95  border-b-[0.5px] border-base-300">
  
  <ul class="flex max-w-screen-lg mx-auto flex-nowrap text-sm font-bold overflow-x-auto px-4 py-3 md:py-4 no-scrollbar  ">
 
    {#each tienda.groups as link, index} 
      <li>
        <a href="#{link.button}" class:btn-primary="{scrollIndex === index}" class="btn btn-sm  md:btn-lg mr-2">{link.button}</a>  
      </li>
    {/each}

  </ul>

</div>



<main class="mx-auto max-w-screen-lg relative break-normal text-base-content">

  <Scrolly bind:value={scrollIndex} >

  {#each tienda.groups as group} 

    <div id="{group.button}"  class=" scroll-mt-20 z-10 px-4 w-full items-start py-4 md:pt-12 select-none " >
      
      <div class="shrink text-2xl md:text-3xl tracking-wide font-bold pb-0 px-4">
        {group.title} 
      </div>
      
      <!-- <div class=" text-sm  line-clamp-2 opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis.</div> -->
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-1 py-4 md:gap-4 "> 
      
        {#each group.productos as item} 
  
          <div class="flex px-4 items-start border-[0.5px] border-base-300 bg-base-100 rounded-2xl select-none" >
            
            <div class=" w-full relative py-4">
              
              <div class="flex justify-between items-center ">
                <div class="shrink tracking-wide font-semibold leading-5 text-lg md:text-xl">
                   {item.title}
                </div>
              </div>
              
              <div class="font-semibold tracking-wide flex items-center space-x-1 opacity-80" >
                $ {item.price}
              </div>

              <div class="text-base md:text-base line-clamp-2 opacity-60">
                {item.description}
              </div>
  
              
  
            </div>
  
            <div class="ml-4 shrink-0 py-4">
              <div
                class="rounded-lg w-20 h-20 md:w-36 md:h-28 bg-cover bg-center"  
                style="background-image: url(assets/images/{item.image_url});"
                alt="demo"
              />
            </div>

          </div>
  
        {/each}
  
      </div>

    </div> 

    

  {/each}

</Scrolly>


<!-- 

  {#each [1] as item}

  <div  class="text-base-content z-10 px-8 w-full items-start pb-4 pt-12 select-none" >
    <div class="shrink text-2xl tracking-wide font-bold pb-1">
      Categoría Signature {item}
    </div>
    <div class=" text-sm  line-clamp-2 opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis.</div>
  </div> 

  <div class="grid grid-cols-1 md:grid-cols-2 gap-1 px-4 md:gap-4 "> 
    
    {#each [1,2,3,4] as item}

    <div class="text-base-content flex px-4 items-start border border-base-200 bg-base-100 rounded-xl select-none" >
      <div class="mr-4 shrink-0 py-4">
      <img
      class="rounded-md w-20 md:w-28"
        src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
        
        alt="demo"
      />
    </div>
    <div class="w-full relative py-4">
      <div class="flex justify-between items-center ">
        <div class="shrink text-base tracking-wide font-bold leading-5 opacity-80">
          Producto
        </div>
        <div
          class="text-base-content font-semibold tracking-wide shrink-0 ml-auto pl-1 flex items-center space-x-1 "
        >
          $ 15
        </div>
        
      </div>

      <div class="text-sm line-clamp-2 opacity-60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla sagittis.
      </div>
    </div>
  </div>

    {/each}

  </div>

  {/each}













  <ul class="divide-y-[.5px] pt-20 divide-base-300 ">
    
    <li class="text-base-content  bg-base-100 z-10 pr-4 pl-4 w-full items-start pb-4 pt-8 select-none" >
      <div class="shrink text-xl tracking-wide font-semibold">
        Categoría
      </div>
      <div class="text-sm line-clamp-2 opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </li>
    
    <li class="text-base-content pr-4 flex items-start select-none bg-base-200" >
      <div class="pl-4 w-full relative py-4">
        <div class="flex justify-between items-center ">
          <div class="shrink text-md tracking-wide font-bold leading-5">
            Product
          </div>
        </div>

        <div class="text-base-content font-semibold tracking-wide flex items-center space-x-1 " >
          $ 15
        </div>
        <div class="text-sm line-clamp-2 opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>

      <div class="ml-4 shrink-0  py-5">
        <img
          class="rounded-md w-20"
          src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
          alt="demo"
        />
      </div>
    </li>

    <li class="text-base-content bg-base-300">
      <div class="pr-4 flex items-start   select-none ">
        <div class="pl-4 w-full relative py-4">
          <div class="flex justify-between items-center ">
            <div class="shrink text-md tracking-wide font-bold leading-5" >
              Product
            </div>
          </div>

          <div class="text-base-content font-semibold tracking-wide flex items-center space-x-1" >
            $ 15
          </div>

          <div class="text-sm line-clamp-2 opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div class="ml-4 shrink-0  py-5">
          <img
            class="rounded-md"
            src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
            width="86"
            alt="demo"
          />
        </div>
      </div>
    </li>

    <li class="text-base-content">
      <div class="pr-4 flex items-start   select-none ">
        <div class="pl-4 w-full relative py-4">
          <div class="flex justify-between items-center ">
            <div
              class="shrink text-md tracking-wide font-bold leading-5"
            >
              Product
            </div>
          </div>

          <div
            class="text-base-content font-semibold tracking-wide flex items-center space-x-1 "
          >
            $ 15
          </div>

          <div class="text-sm line-clamp-2 opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div class="ml-4 shrink-0  py-5">
          <img
            class="rounded-md"
            src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
            width="86"
            alt="demo"
          />
        </div>
      </div>
    </li>

    <li class="text-base-content">
      <div class="pr-4 flex items-start select-none ">
        <div class="pl-4 w-full relative py-4">
          <div class="flex justify-between items-center ">
            <div
              class="shrink text-md tracking-wide font-bold leading-5"
            >
              Product
            </div>
          </div>

          <div
            class="text-base-content font-semibold tracking-wide flex items-center space-x-1 "
          >
            $ 15
          </div>

          <div class="text-sm line-clamp-2 opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div class="ml-4 shrink-0  py-5">
          <img
            class="rounded-md"
            src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
            width="86"
            alt="demo"
          />
        </div>
      </div>
    </li>

    <li
      class="text-base-content  bg-base-200 z-10 pr-4 pl-4 w-full items-start pb-4 pt-8 select-none"
    >
      <div class="shrink text-xl tracking-wide font-semibold">
        Categoría
      </div>
          <div class="text-sm line-clamp-2 opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </li>

    <li class="text-base-content">
      <div class="pr-4 flex items-start select-none ">
        <div class="pl-4 w-full relative py-4">
          <div class="flex justify-between items-center ">
            <div
              class="shrink text-md tracking-wide font-bold leading-5"
            >
              CHEESE QUESADILLA
            </div>
                      <div class="text-base-content font-medium shrink-0 ml-auto pl-1 flex items-center space-x-1 ">$15</div>
          </div>

          <div
            class="text-base-content font-semibold tracking-wide flex items-center space-x-1 "
          >
            $ 15
          </div>

          <div class="text-sm line-clamp-2 opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        <div class="ml-4 shrink-0  py-5">
          <img
            class="rounded-md"
            src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
            width="86"
            alt="demo"
          />
        </div>
      </div>
    </li>

    <li class="text-base-content">
      <div class="pr-4 flex items-start   select-none ">
        <div class="pl-4 w-full relative py-4">
          <div class="flex justify-between items-center ">
            <div
              class="shrink text-md tracking-wide font-bold leading-5"
            >
              CHEESE QUESADILLA
            </div>
                      <div class="text-base-content font-medium shrink-0 ml-auto pl-1 flex items-center space-x-1 ">$15</div>
          </div>

          <div
            class="text-base-content font-semibold tracking-wide flex items-center space-x-1 "
          >
            $ 15
          </div>

          <div class="text-sm line-clamp-2 opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div class="ml-4 shrink-0  py-5">
          <img
            class="rounded-md"
            src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
            width="86"
            alt="demo"
          />
        </div>
      </div>
    </li>

    <li class="text-base-content">
      <div class="pr-4 flex items-start   select-none ">
        <div class="pl-4 w-full relative py-4">
          <div class="flex justify-between items-center ">
            <div
              class="shrink text-md tracking-wide font-bold leading-5"
            >
              CHEESE QUESADILLA
            </div>
                      <div class="text-base-content font-medium shrink-0 ml-auto pl-1 flex items-center space-x-1 ">$15</div>
          </div>

          <div
            class="text-base-content font-semibold tracking-wide flex items-center space-x-1 "
          >
            $ 15
          </div>

          <div class="text-sm line-clamp-2 opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div class="ml-4 shrink-0  py-5">
          <img
            class="rounded-md"
            src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
            width="86"
            alt="demo"
          />
        </div>
      </div>
    </li>

    <li class="text-base-content">
      <div class="pr-4 flex items-start select-none ">
        <div class="pl-4 w-full relative py-4">
          <div class="flex justify-between items-center ">
            <div
              class="shrink text-md tracking-wide font-bold leading-5"
            >
              CHEESE QUESADILLA
            </div>
                      <div class="text-base-content font-medium shrink-0 ml-auto pl-1 flex items-center space-x-1 ">$15</div>
          </div>

          <div
            class="text-base-content font-semibold tracking-wide flex items-center space-x-1 "
          >
            $ 15
          </div>

          <div class="text-sm line-clamp-2 opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div class="ml-4 shrink-0  py-5">
          <img
            class="rounded-md"
            src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
            width="86"
            alt="demo"
          />
        </div>
      </div>
    </li>

    <li
      class="text-base-content  bg-base-200 z-10 pr-4 pl-4 w-full items-start pb-4 pt-8 select-none"
    >
      <div class="shrink text-xl tracking-wide font-semibold">
        Categoría
      </div>
          <div class="text-sm line-clamp-2 opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </li>

    <li class="text-base-content">
      <div class="pl-4 flex items-start select-none ">
        <div class="mr-4 shrink-0  py-5">
          <img
            class="rounded-md"
            src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
            width="58"
            alt="demo"
          />
        </div>
        <div class="pr-4 w-full relative py-4">
          <div class="flex justify-between items-center ">
            <div class="shrink text-lg tracking-wide font-bold">
              Producto
            </div>
            <div
              class="text-base-content font-semibold tracking-wide shrink-0 ml-auto pl-1 flex items-center space-x-1 "
            >
              $ 15
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              viewBox="0 0 12 20"
              fill="currentcolor"
              class=" shrink-0 ml-3"
            >
              <path
                d="M11.518406,10.5648622 C11.4831857,10.6163453 11.4426714,10.6653692 11.3968592,10.7111814 L2.5584348,19.5496058 C1.9753444,20.1326962 1.03186648,20.1345946 0.44199608,19.5447242 C-0.14379032,18.9589377 -0.14922592,18.0146258 0.43711448,17.4282854 L7.87507783,9.9903221 L0.4431923,2.5584366 C-0.1398981,1.9753462 -0.1417965,1.0318683 0.448074,0.4419979 C1.0338604,-0.1437886 1.9781723,-0.1492241 2.56451268,0.4371163 L11.4029371,9.2755407 C11.7556117,9.6282153 11.7969345,10.1725307 11.518406,10.5648622 Z"
              />
            </svg>
          </div>

          <div class="text-sm line-clamp-2 opacity-60">
            Lorem ipsum dolor sit amet, consecteturs.
          </div>
        </div>
      </div>
    </li>

    <li class="text-base-content">
      <div class="pl-4 flex items-start select-none ">
        <div class="mr-4 shrink-0  py-5">
          <img
            class="rounded-md"
            src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
            width="58"
            alt="demo"
          />
        </div>
        <div class="pr-4 w-full relative border-b border-base-200 py-4">
          <div class="flex justify-between items-center ">
            <div class="shrink text-lg tracking-wide font-bold">
              Producto
            </div>
            <div
              class="text-base-content font-semibold tracking-wide shrink-0 ml-auto pl-1 flex items-center space-x-1 "
            >
              $ 15
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              viewBox="0 0 12 20"
              fill="currentcolor"
              class=" shrink-0 ml-3"
            >
              <path
                d="M11.518406,10.5648622 C11.4831857,10.6163453 11.4426714,10.6653692 11.3968592,10.7111814 L2.5584348,19.5496058 C1.9753444,20.1326962 1.03186648,20.1345946 0.44199608,19.5447242 C-0.14379032,18.9589377 -0.14922592,18.0146258 0.43711448,17.4282854 L7.87507783,9.9903221 L0.4431923,2.5584366 C-0.1398981,1.9753462 -0.1417965,1.0318683 0.448074,0.4419979 C1.0338604,-0.1437886 1.9781723,-0.1492241 2.56451268,0.4371163 L11.4029371,9.2755407 C11.7556117,9.6282153 11.7969345,10.1725307 11.518406,10.5648622 Z"
              />
            </svg>
          </div>

          <div class="text-sm line-clamp-2 opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla sagittis.
          </div>
        </div>
      </div>
    </li>

    <li class="text-base-content">
      <div class="pl-4 flex items-start select-none ">
        <div class="mr-4 shrink-0  py-5">
          <img
            class="rounded-md"
            src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
            width="58"
            alt="demo"
          />
        </div>
        <div class="pr-4 w-full relative border-b border-base-200 py-4">
          <div class="flex justify-between items-center ">
            <div class="shrink text-lg tracking-wide font-bold">
              Producto
            </div>
            <div
              class="text-base-content font-semibold tracking-wide shrink-0 ml-auto pl-1 flex items-center space-x-1 "
            >
              $ 15
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              viewBox="0 0 12 20"
              fill="currentcolor"
              class=" shrink-0 ml-3"
            >
              <path
                d="M11.518406,10.5648622 C11.4831857,10.6163453 11.4426714,10.6653692 11.3968592,10.7111814 L2.5584348,19.5496058 C1.9753444,20.1326962 1.03186648,20.1345946 0.44199608,19.5447242 C-0.14379032,18.9589377 -0.14922592,18.0146258 0.43711448,17.4282854 L7.87507783,9.9903221 L0.4431923,2.5584366 C-0.1398981,1.9753462 -0.1417965,1.0318683 0.448074,0.4419979 C1.0338604,-0.1437886 1.9781723,-0.1492241 2.56451268,0.4371163 L11.4029371,9.2755407 C11.7556117,9.6282153 11.7969345,10.1725307 11.518406,10.5648622 Z"
              />
            </svg>
          </div>

          <div class="text-sm line-clamp-2 opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla sagittis.
          </div>
        </div>
      </div>
    </li>

    <li class="text-base-content">
      <div class="pl-4 flex items-start select-none ">
        <div class="mr-4 shrink-0  py-5">
          <img
            class="rounded-md"
            src="https://api.lorem.space/image/pizza?w=150&h=150&hash=8B7BCDC2"
            width="58"
            alt="demo"
          />
        </div>
        <div class="pr-4 w-full relative border-b border-base-200 py-4">
          <div class="flex justify-between items-center ">
            <div class="shrink text-lg tracking-wide font-bold">
              Producto
            </div>
            <div
              class="text-base-content font-semibold tracking-wide shrink-0 ml-auto pl-1 flex items-center space-x-1 "
            >
              $ 15
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              viewBox="0 0 12 20"
              fill="currentcolor"
              class=" shrink-0 ml-3"
            >
              <path
                d="M11.518406,10.5648622 C11.4831857,10.6163453 11.4426714,10.6653692 11.3968592,10.7111814 L2.5584348,19.5496058 C1.9753444,20.1326962 1.03186648,20.1345946 0.44199608,19.5447242 C-0.14379032,18.9589377 -0.14922592,18.0146258 0.43711448,17.4282854 L7.87507783,9.9903221 L0.4431923,2.5584366 C-0.1398981,1.9753462 -0.1417965,1.0318683 0.448074,0.4419979 C1.0338604,-0.1437886 1.9781723,-0.1492241 2.56451268,0.4371163 L11.4029371,9.2755407 C11.7556117,9.6282153 11.7969345,10.1725307 11.518406,10.5648622 Z"
              />
            </svg>
          </div>

          <div class="text-sm line-clamp-2 opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla sagittis.
          </div>
        </div>
      </div>
    </li>
  </ul> -->


</main>
