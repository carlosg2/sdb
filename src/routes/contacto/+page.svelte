<script>
  import Head from '@components/head.svelte'
    import BadgeCheck from '@lib/icons/badge-check.svelte'
  import { description, siteName } from '@lib/site-config'

  import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

</script>

<Head title={`Club de Pollos`} />


<!-- <section class="hero h-[460px]" style="background-image: url(/assets/images/background.jpg);" >

  <div class="hero-overlay bg-base-200 bg-opacity-40 "></div>
  <div class="hero-content text-center text-base-content">
    <div class="max-w-2xl pt-20"> 
      <h1 class="mb-5 text-5xl md:text-7xl font-bold font-display ">Somos Pollos<br>No Gallinas</h1>
      <p class="text-xl font-medium mb-4">Ni Tigres, ni Rayados tienen estas piernas.</p>
     
    </div>
  </div>
</section> -->



<!-- Section 4 -->
<section class="hero px-8 py-16 xl:px-8" style="background-image: url(/assets/images/background.jpg);" >
  <div class="max-w-6xl mx-auto pt-10">
      <div class="flex flex-col items-center  md:flex-row mx-auto max-w-6xl">

          <div class="w-full space-y-5 md:w-3/5 md:pr-16">
              <p class="text-sm font-bold text-primary text-center tracking-widest uppercase">Contactanos</p>
              <h2 class="text-2xl font-display leading-none text-base-content sm:text-3xl md:text-5xl text-center">
                  Revolucionando la forma que comemos pollo
              </h2>
              <!-- <p class="text-xl text-base-content md:pr-16 text-center">Learn how to engage with your visitors and teach them about your mission. We're revolutionizing the way customers and businesses interact.</p> -->
          </div>

          <div class="w-full mt-16 md:mt-0 md:w-2/5">
              <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-neutral rounded-box shadow-2xl px-7">
                  
                  <input type="text" name="email" class="px-4 py-3 mb-4 input w-full" placeholder="Email address">
                  <textarea class=" px-4 py-3 mb-4 textarea w-full" placeholder="Mensaje"></textarea>
                  <div class="block">
                      <button class="btn btn-primary w-full px-3 py-4 ">Enviar</button>
                  </div>
                  <!-- <p class="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="#_" class="text-blue-500 underline">Sign up here</a></p> -->
              </div>
          </div>

      </div>
  </div>
</section>


  