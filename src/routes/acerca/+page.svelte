<script>
  import Head from '@components/head.svelte'
    import BadgeCheck from '@lib/icons/badge-check.svelte'
  import { description, siteName } from '@lib/site-config'

  import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

</script>

<Head title={`Club de Pollos`} />


<section class="hero h-[500px] " style="background-image: url(/assets/images/background.jpg);" >
  <!-- style="background-image: url(https://www.clubdepollos.com/assets/images/cesped-1920x1440.jpg);" -->
  <div class="hero-overlay bg-base-200 bg-opacity-40"></div>
  <div class="hero-content text-center text-base-content">
    <div class="max-w-2xl py-20"> 
      <h1 class="mb-5 text-6xl md:text-7xl font-bold font-display ">Somos Pollos<br>No Gallinas</h1>
      <p class="text-xl font-medium mb-4">Ni Tigres, ni Rayados tienen estas piernas.</p>
      <!-- <button class="btn btn-primary">CTA</button> -->
     
    </div>
  </div>
</section>

<section class="">
  <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
          <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
          <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
          <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1">
          <img class="mt-4 w-full rounded-lg lg:mt-10" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2">
      </div>
  </div>
</section>

<section class="w-full bg-base-300 pt-7 pb-7 md:pt-20 md:pb-24 " >
  <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

      <!-- Image -->
      <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <img src="https://www.clubdepollos.com/assets/images/pollonaldo3-1280x1280.png" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20">
      </div>

      <!-- Content -->
      <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Boost Productivity
          </h2>
          <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Build an atmosphere that creates productivity in your organization and your company culture.
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" ><span class="text-sm font-bold">✓</span></span> Maximize productivity and growth
              </li>
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" ><span class="text-sm font-bold">✓</span></span> Speed past your competition
              </li>
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" ><span class="text-sm font-bold">✓</span></span> Learn the top techniques
              </li>
          </ul>
      </div>
      <!-- End  Content -->
  </div>
  <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

      <!-- Content -->
      <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Automated Tasks
          </h2>
          <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Save time and money with our revolutionary services. We are the leaders in the industry.
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span class="text-sm font-bold">✓</span></span> Automated task management workflow
              </li>
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span class="text-sm font-bold">✓</span></span> Detailed analytics for your data
              </li>
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span class="text-sm font-bold">✓</span></span> Some awesome integrations
              </li>
          </ul>
      </div>
      <!-- End  Content -->

      <!-- Image -->
      <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <img src="https://www.clubdepollos.com/assets/images/pollonaldo3-1280x1280.png" class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32">
      </div>
  </div>
</section>



<!-- <section class="bg-base-200">
  <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div class="sm:text-lg ">
          <p class="mb-4 text-xl font-medium leading-none">Franquicias Disponibles</p>
          <h2 class="mb-4 text-4xl font-extrabold text-base-content ">Inicia hoy tu propio<br>Club de Pollos<br>#SomosPollos</h2>
          
          
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
          <img class="w-full rounded-lg" src="assets/images/contragolpe.png" alt="office content 1">
          <img class="mt-4 w-full rounded-lg lg:mt-10" src="assets/images/areachica.png" alt="office content 2">
      </div>
  </div>
</section> -->

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



  