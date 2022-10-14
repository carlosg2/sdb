<script>
  import Head from '@components/head.svelte'
  import { description, siteName } from '@lib/site-config'
</script>

<Head title={`Hello World`} />


<div class="hero " style="background-image: url(https://placeimg.com/1000/800/arch);">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md py-16">
      <h1 class="mb-5 text-5xl font-bold ">Title</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">CTA</button>
    </div>
  </div>
</div>

<!-- <div class="mb-20 min-h-[65vh] hero">
  <EndlessClouds />
  <div class="bg-opacity-95 hero-overlay" />
  <div class="text-center text-neutral-content hero-content">
    <div class="max-w-2xl">
      <h1 class="font-bold text-secondary mb-5 text-5xl">
        Hello there
      </h1>
      <h2 class="font-bold text-secondary mb-5 text-4xl">
        {siteName}
      </h2>
      <p class="mb-5">
        {description}
      </p>
      <a sveltekit:prefetch href={`/posts`} class="btn btn-primary" >
        Blog
      </a>
    </div>

    
  </div>
</div> -->
