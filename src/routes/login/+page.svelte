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
  <div class="max-w-6xl mx-auto pt-8">
      <div class="flex flex-col  items-center mx-auto max-w-6xl">

          <div class="w-full pb-6">
              <p class="text-sm font-bold text-primary text-center tracking-widest uppercase">Bienvenido</p>
              <!-- <h2 class="text-2xl font-display leading-none text-base-content sm:text-3xl md:text-5xl text-center">
                  Revolucionando la forma que comemos pollo
              </h2>
              <p class="text-xl text-base-content md:pr-16 text-center">Learn how to engage with your visitors and teach them about your mission. We're revolutionizing the way customers and businesses interact.</p> -->
          </div>

          <div class="w-full md:mt-0">
              <div class="relative z-10 h-auto p-8 py-8 overflow-hidden bg-neutral border-[0.5px] border-base-300 rounded-box shadow-2xl px-7">
                  
                  <input type="text" name="email" class="px-4 py-3 mb-4 input w-full" placeholder="Email ó número de teléfono">
                  <input type="password" name="password" class="px-4 py-3 mb-4 input w-full" placeholder="Contraseña">
                  <div class="block">
                      <button class="btn btn-primary w-full px-4 py-3  ">Iniciar sesión</button>
                  </div>

                  <p class="w-full mt-4 text-sm text-center text-gray-500"><a href="#_" class="text-blue-500 ">¿Olvidaste tu contraseña?</a></p>

                  <div class="divider ">ó</div> 

                  <div class="block">
                    <button class="btn btn-outline w-full px-4 py-3 ">Crear cuenta nueva</button>
                </div>
                 
              </div>
          </div>

      </div>
  </div>
</section>


  