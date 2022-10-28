<script>
  import Head from '$lib/components/head.svelte'
  import PostCard from '$lib/components/post-card.svelte'

  import { groupBy,toArray } from 'lodash';

  export let data
  let { posts } = data

  export let scrollIndex = 0;
</script>

<Head title={'Sucursales'} />

<div class="hero " style="background-image: url(https://www.clubdepollos.com/assets/images/cesped-1920x1440.jpg);">
  <div class="hero-overlay bg-base-100 opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md pt-4 text-base-content">
      <h1 class="mb-4 text-5xl font-display font-bold ">Sucursales</h1>
      <p class="text-xl font-medium mb-4">Ni Tigres, ni Rayados tienen estas piernas.</p>
    </div>
  </div>
</div>

<div class="  relative break-normal sticky top-0 z-10  bg-base-100/95  border-b-[0.5px] border-base-300">
  
  <ul class="flex max-w-screen-lg mx-auto flex-nowrap text-sm font-bold overflow-x-auto px-4 py-3 md:py-4 no-scrollbar  ">
 
    {#each posts as post, index} 
      {#if post.published}
        <li>
          <a href="#{post.title}" class:btn-primary="{scrollIndex === index}" class="btn btn-sm  md:btn-lg mr-2">{post.title}</a>  
        </li>
      {/if}
      
    {/each}

  </ul>

</div>

<main class="mx-auto max-w-screen-lg relative break-normal">

  <div class="flex flex-col flex-grow"> 
    
    {#each posts as post}
      
    <div class="flex px-4 items-start border-[0.5px] border-base-300 bg-base-100 rounded-2xl select-none" >
            
      <div class=" w-full relative py-4">
        
        <div class="flex justify-between items-center ">
          <div class="shrink tracking-wide font-semibold leading-5 text-base md:text-xl">
             {post.title}
          </div>
        </div>
        
        <div class="font-semibold tracking-wide flex items-center space-x-1 opacity-80" >
          $ {post.title}
        </div>

        <div class="text-base md:text-base line-clamp-2 opacity-60">
          {post.title}
        </div>

        

      </div>

      <div class="ml-4 shrink-0 py-4">
        <!-- <div
          class="rounded-lg w-20 h-20 md:w-36 md:h-28 bg-cover bg-center"  
          style="background-image: url(assets/images/{post.title});"
          alt="demo"
        /> -->
      </div>

    </div>
    
    {/each}
  </div>

</main>
