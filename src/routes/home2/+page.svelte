<script>
    import Head from '@components/head.svelte'
      import BadgeCheck from '@lib/icons/badge-check.svelte'
    import { description, siteName } from '@lib/site-config'
  </script>
  
  <Head title={`Hello World`} />
  
  
  <section class="hero h-[500px] " style="background-image: url(https://www.clubdepollos.com/assets/images/cesped-1920x1440.jpg);" >
    <!-- style="background-image: url(https://www.clubdepollos.com/assets/images/cesped-1920x1440.jpg);" -->
    <div class="hero-overlay bg-base-200 bg-opacity-80"></div>
    <div class="hero-content text-center text-base-content">
      <div class="max-w-2xl py-20"> 
        <h1 class="mb-5 text-6xl md:text-7xl font-bold font-display ">Somos Pollos<br>No Gallinas</h1>
        <p class="text-xl font-medium mb-4">Ni Tigres, ni Rayados tienen estas piernas.</p>
        <button class="btn btn-primary">CTA</button>
      </div>
    </div>
  </section>
  
  <!-- Section 2 -->
  <section class="w-full bg-base-200 mt-90]">
    <div class="py-10 px-4 mx-auto max-w-7xl md:px-8">
  
        <div class="flex flex-col items-center w-full overflow-hidden bg-primary text-primary-content rounded-2xl md:flex-row">
            <div class="flex flex-col w-full p-10 mt-4 text-center md:w-1/2 md:mt-0">
                <p class="mb-4 text-lg font-semibold tracking-wider leading-none">DELICIOSO Y CRUJIENTE</p>
                <h2 class="max-w-md mx-auto mb-6 text-3xl md:text-4xl font-bold font-display md:leading-tight ">Pollo Frito Estilo Texas<br>Receta Original.</h2>
                <a href="#_" class="btn btn-neutral w-auto mx-auto ">
                    <span>Explorar el Menú</span>
                    <svg class="w-3 h-3 mt-0.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
            </div>
            <div class="w-full mt-7 md:w-1/2 md:mt-0">
                <img alt="img" src="assets/images/detijera.png" class="w-full">
            </div>
        </div>
  
        <div class="flex flex-col mt-10 md:flex-row md:mt-8 md:space-x-8" >
            <div class="flex flex-col items-center justify-center flex-1 overflow-hidden text-center bg-base-100 rounded-2xl " data-theme="light">
                <div class="flex flex-col px-10 pb-5 space-y-6 pt-14 md:px-8">
                    <h3 class="text-3xl md:text-4xl font-bold font-display md:leading-tight">
                        Combo de Remate
                    </h3>
                    <p class="text-xl font-base text-base-content">Deliciosos y crujiente pollo frito estilo Texas.</p>
                    <a href="#_" class="btn btn-primary w-auto mx-auto ">
                        <span>Explorar el Menú</span>
                        <svg class="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                </div>
                <img alt="img" src="assets/images/detijera.png" class="w-2/3">
            </div>
            <div class="relative flex flex-col items-center justify-center flex-1 py-32 mt-10 overflow-hidden text-center bg-base-100 rounded-2xl border-[0.5px] border-base-300  md:mt-0">
                <BadgeCheck tailwindClasses="w-24 h-24 text-base-300" />
                <div class="flex flex-col px-10 space-y-6 md:px-8">
                    <h3 class="text-3xl  md:text-4xl font-bold font-display leading-none">
                        Unete al club
                    </h3>
                    <p class="text-xl font-light text-base-content">Siguenos en Facebook y enterate de todas las promociones que tenemos para ti</p>
                    <a href="#_" class="btn btn-primary mx-auto ">
                        <span>Learn more</span>
                        <svg class="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                </div>
            </div>
        </div>
  
        <div class="flex flex-col-reverse items-center w-full mt-10 p-10 bg-base-100 border-[0.5px] border-base-300 rounded-xl sm:p-10 md:flex-row">
  
          <div class="w-full md:w-1/2 md:mt-0">
              <img alt="img" src="assets/images/arbitro.png" class="w-full">
          </div>
  
          <div class="flex flex-col w-full space-y-6 text-center md:w-1/2 px-7 sm:px-0">
              <p class=" text-xl font-medium leading-none">Franquicias Disponibles</p>
              <h2 class="mb-4 text-4xl font-bold font-display text-base-content ">Inicia hoy tu propio<br>Club de Pollos<br>#SomosPollos</h2>
              
              <a href="#_" class="btn btn-primary mx-auto ">
                <span>Solicitar información</span>
                <svg class="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
  
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
  