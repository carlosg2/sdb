<script>
    import Head from '@components/head.svelte'
    import { page } from '$app/stores'
    import Scrolly from '@lib/components/helpers/Scrolly.svelte'
    import useScrollChild from '@apsc/scroll-child-action';
    import { goto } from '$app/navigation';
    import slugify from '@sindresorhus/slugify';
    import { fade, fly, scale, slide } from 'svelte/transition';
	import * as eases from 'svelte/easing';
    import { onMount } from 'svelte';
	
	let selected = null;
	
	const get_src = id => `/assets/images/${id}.png`;
  
  
    export let data
    $: tienda = data.tienda;
    $: active = String($page.url).split("#")[0];
  
    export let scrollIndex = 0;

	
	const parse_brad = (str, rect) => {
		const [x, y = x] = str.split(' ').map((str, i) => {
			if (str.endsWith('px')) return +str.slice(0, -2);
			
			// otherwise ends with %
			const pc =  Math.min(50, +str.slice(0, -1));
			const length = i === 0 ? rect.width : rect.height;
			return length * pc / 100;
		});
		
		return [x, y];
	};
	
	const expand = (node, { id }) => {

		function get_state(node)
        {
			const rect = node.getBoundingClientRect();
			const style = getComputedStyle(node);
			const transform_origin = style.transformOrigin.split(' ').map(parseFloat);
			const cx = rect.left + transform_origin[0];
			const cy = rect.top + transform_origin[1];
			
			const brad = [
				parse_brad(style.borderTopLeftRadius, rect),
				parse_brad(style.borderTopRightRadius, rect),
				parse_brad(style.borderBottomRightRadius, rect),
				parse_brad(style.borderBottomLeftRadius, rect)
			];
			
			const border = [
				parseFloat(style.borderTopWidth),
				parseFloat(style.borderRightWidth),
				parseFloat(style.borderBottomWidth),
				parseFloat(style.borderLeftWidth)
			];
			
			return { cx, cy, rect, brad, border };
		}
		
		const source = get_state(document.querySelector(`[data-id="${id}"]`));
		const target = get_state(node);
		
		return {
			duration: 450,
            delay:0,
			easing: eases.expoOut,
			css: (t, u) => {
				const tx = u * (source.cx - target.cx);
				const ty = u * (source.cy - target.cy);
				const translate = `translate(${tx}px,${ty}px)`;
				
				const sx = t + u * source.rect.width / target.rect.width;
				const sy = t + u * source.rect.height / target.rect.height;
				const scale = `scale(${sx},${sy})`;
				
				const brad_x_source = source.brad.map(a => a[0]);
				const brad_x_target = target.brad.map(a => a[0]);
				const brad_x = brad_x_source.map((source, i) => {
					const target = brad_x_target[i];
					return `${(target + u * (source - target)) / sx}px`;
				});
				
				const brad_y_source = source.brad.map(a => a[1]);
				const brad_y_target = target.brad.map(a => a[1]);
				const brad_y = brad_x_source.map((source, i) => {
					const target = brad_y_target[i];
					return `${(target + u * (source - target)) / sy}px`;
				});
				
				const brad = `${brad_x.join(' ')} / ${brad_y.join(' ')}`;
				
				const target_border = target.border;
				const border = source.border.map((source, i) => {
					const target = target_border[i];
					const s = i % 2 ? sy : sx;
					return `${(target + u * (source - target)) / s}px`
				}).join(' ');
																					 
				return `transform: ${translate} ${scale}; border-radius: ${brad}; border-width: ${border}`
			}
		};
	}

  // scrolllock for content underneath productsdetail
	function scrollLock(selected) {
		if (mounted) {
			const body = document.querySelector('body');
			body.style.overflow = selected ? 'hidden' : 'auto';
		}
	}

    let mounted = false;
	
    $: scrollLock(selected);

	onMount(() => {
		mounted = true;
		scrollLock(selected);
	});

</script>
  
  <Head title={'Menú Club de Pollos - ' + tienda.store} />

  <svelte:head>
        {#each ["areachica", "tirolibre", "fueradelugar", "penalty", "balondeoro", "contragolpe", "dechilena", "depalomita", "juezdelinea", "detaconcito", "detijera", "goleador"] as id}
            <link rel="preload" as="image" href="/assets/images/{id}.png" />               
        {/each}
</svelte:head>




{#if selected}

    <div class="h-full w-full bg-base-200   justify-center place-items-center h-full flex fixed top-0 left-0 z-30" transition:fade={{duration:50}}></div>

	<!-- <div class="h-full w-full flex lex fixed top-0 left-0 overflow-y-auto justify-center items-center" on:click={() => selected = null}>
		<div class=" h-full flex flex-col xl:flex-row w-full" >
		  <img src={get_src(selected)} class="z-10 will-tranform" transition:expand={{id:selected}} />
		  <div class=" bg-base-200 p-16 space-y-4 grow shrink-0 basis-28" transition:fly={{y:100, duration:500, easing: eases.expoOut }}>
			<div class="text-2xl leading-8 font-extrabold text-primary sm:text-3xl sm:leading-9">Titulo del producto</div>
			<div class="leading-6 font-semibold tracking-wide text-base-content uppercase">Grupo</div>
			<div class="text-xl leading-7 text-base-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.</div>
		  </div>
		</div>
	  </div> -->

	  <section class="h-full w-full flex fixed top-0 left-0 overflow-y-auto justify-center z-30" >
      
        <div class="container mx-auto p-4 md:py-20 md:px-12">
          <div class="flex flex-wrap flex-row-reverse -mx-4 mb-24" >
            <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div class="relative" >
                <img class=" w-full rounded-box"
                    src={selected.image_url} alt=""
                    transition:expand={{id:selected.id}}
                    on:click={() => selected = null}>
              </div>
            </div>
    
			      <div class="w-full md:w-1/2 px-4" in:fly={{y:10, duration:350, delay:100  }} out:fade={{ duration:30 }} >
              <div class="lg:pl-10">
                <div class="mb-10 pb-10 border-b border-base-300 border-b-[0.5px]" >
                  <!-- <span class="text-base-content" >Categoría</span> -->
                  <h2 class="mt-2 mb-4 max-w-xl text-3xl md:text-4xl font-bold font-display" >{selected.title}</h2>
                  
                  <p class="inline-block mb-4 text-2xl font-bold font-heading text-primary">
                    <span>${selected.price}</span>

                  </p>
                  <p class="max-w-md text-base-content" >{selected.description}</p>
                </div>

				      <div class="my-4">

					
					<div class="mt-10">
					  <div class="flex items-center justify-between">
						<h4 class="text-sm font-medium">Modificador</h4>
					  </div>
		  
					  <div class="mt-4 space-y-4">
						<div>
						  <input class="hidden peer" type="radio" name="shippingOption" value="standard" id="standard" />
		  
						  <label class="flex items-center justify-between p-4 text-sm font-medium  border border-base-300 rounded-box cursor-pointer peer-checked:border-blue-500 hover:bg-base-100 peer-checked:bg-base-100 peer-checked:ring-1 peer-checked:ring-blue-500" for="standard">
							<span> Papas Fritas </span>
		  
							<span> $60 </span>
						  </label>
						</div>
		  
						<div>
						  <input class="hidden peer" type="radio" name="shippingOption" value="next_day" id="next_day" />
		  
						  <label class="flex items-center justify-between p-4 text-sm font-medium border border-base-300 rounded-box cursor-pointer peer-checked:border-blue-500 hover:bg-base-100 peer-checked:bg-base-100 peer-checked:ring-1 peer-checked:ring-blue-500" for="next_day">
							<span> Pieza Extra </span>
		  
							<span> $20 </span>
						  </label>
						</div>
					  </div>
		  
					</div>
		  
					
					<div class="mt-10">
					  <div class="flex items-center justify-between">
						<h4 class="text-sm font-medium">Complementos</h4>
					  </div>
		  
					  <div class="mt-4 grid grid-cols-2 gap-4">
						<div class="relative">
						  <input class="hidden group peer" type="radio" name="shippingOption" value="standard_alt" id="standard_alt" />
		  
						  <label class="block p-4 text-sm font-medium border border-base-300 rounded-box cursor-pointer peer-checked:border-blue-500 hover:bg-base-100 peer-checked:bg-base-100 peer-checked:ring-1 peer-checked:ring-blue-500" for="standard_alt">
							<span> 2 Purés </span>
		  
							<span class="block mt-1 text-xs text-gray-500">
							  $30
							</span>
						  </label>
		  
						  <svg class="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						  </svg>
						</div>
		  
						<div class="relative">
						  <input class="hidden group peer" type="radio" name="shippingOption" value="next_day_alt" id="next_day_alt" />
		  
						  <label class="block p-4 text-sm font-medium border border-base-300 rounded-box cursor-pointer peer-checked:border-blue-500 hover:bg-base-100 peer-checked:bg-base-100 peer-checked:ring-1 peer-checked:ring-blue-500" for="next_day_alt">
							<span> 4 Purés </span>
		  
							<span class="block mt-1 text-xs text-gray-500">
							  $40
							</span>
						  </label>
		  
						  <svg class="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						  </svg>
						</div>
					  </div>
		  
					</div>
		  
					<div class="modal-action ">

						<div class="inline-flex items-center px-4 font-semibold font-heading text-primary-content border border-base-300 focus:ring-blue-300 focus:border-blue-300 rounded-box">
							<button class="py-2 hover:text-gray-700">
							  <svg width="12" height="2" viewbox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg" ><g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect></g></svg>
							</button>
							<input class="input input-ghost w-20 m-0 px-4 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-box" type="number" placeholder="1">
							<button class="py-2 hover:text-gray-700">
							  <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" ><g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g></svg>
							</button>
						  </div>
		  
					  <div for="my-modal-2" class="btn btn-lg btn-primary " on:click={() => selected = null}>Agregar
		  
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 ml-2 stroke-current">
						  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
						</svg>
		  
                    </div>
					</div>

                    
		  
				  </div>

                
                  <!-- <div class="flex mb-12">
                  <div class="mr-6">
                    <span class="block mb-4 font-bold font-heading text-base-content opacity-60 uppercase" >Cantidad</span>
                    <div class="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                      <button class="py-2 hover:text-gray-700">
                        <svg width="12" height="2" viewbox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg" ><g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect></g></svg>
                      </button>
                      <input class="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md" type="number" placeholder="1">
                      <button class="py-2 hover:text-gray-700">
                        <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" ><g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g></svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <span class="block mb-4 font-bold font-heading text-gray-400 uppercase" >Tamaño</span>
                    <select class="pl-6 pr-10 py-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" >
                      <option value="1">Chico</option>
                      <option value="2">Mediano</option>
                      <option value="3">Grande</option>
                    </select>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-4 mb-14 items-center">
                  <div class="w-full xl:w-2/3 px-4 mb-4 xl:mb-0"><a class="btn btn-block btn-primary btn-lg py-5 px-8  uppercase" href="#_" >Agregar</a></div>
                  <div class="w-full xl:w-1/3 px-4">
                    <a class="ml-auto sm:ml-0 flex-shrink-0 inline-flex mr-4 items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500" href="#">
                      <svg class="w-6 h-6" width="27" height="27" viewbox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-5-1">
                        <path d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </a>
                    <a class="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500" href="#">
                      <svg class="w-6 h-6" width="24" height="23" viewbox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-6-1">
                        <path d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z" fill="black" stroke="black" stroke-width="0.35"></path>
                      </svg>
                    </a>
                  </div>
                </div> -->
                
              </div>
            </div>
          </div>
          
        </div>
      </section>

	<!-- <div class="h-full w-full place-items-star h-full flex fixed top-0 left-0" on:click={() => selected = null}>
		<div class="box-border rounded-0 overflow-hidden" transition:expand={{id:selected}}>
			<img
                src={get_src(selected)}
                class="w-full h-full"
				alt="full size"
                
			>
		</div>
	</div> -->
{/if}
  
  
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
  
  <div class=" sticky top-0 z-20 bg-base-100/50 backdrop-blur-md saturate-200 border-b-[0.5px]  border-base-300 " >
    <div class="flex  max-w-screen-lg mx-auto flex-nowrap text-sm font-bold overflow-x-auto  px-4 py-3 md:py-4 no-scrollbar ">
      {#each tienda.groups as link, index}  
        <a 
        use:useScrollChild={scrollIndex === index ? { x: true } : false}
        on:click|preventDefault={() => goto('#'+ slugify(link.title), { replaceState:false})}
        class:btn-primary="{scrollIndex === index}"
        class:btn-ghost="{scrollIndex != index}"
        class="btn font-display border-0 text-lg md:text-xl btn-md md:btn-lg w-auto mr-2">{link.title}</a>
      {/each}
    </div>
  </div>

  <div class="w-full flex justify-center items-center ">

    <!-- p-4 md:p-12 container mx-auto h-full grid
    gap-3 lg:gap-6 xl:gap-8 
    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  overflow-y-auto (abajo) -->

    <div class="p-4 md:p-12 container mx-auto h-full grid
                gap-3 lg:gap-6 xl:gap-8 
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  overflow-y-auto">
        {#each tienda.groups as group}
            {#each group.productos as item }
                {#if item.image_url}
                    
                <div on:click={() => selected = item}
                    class="text-base-content flex px-4 items-start  border-[0.5px] border-base-300 bg-base-100 rounded-box select-none" >
            
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
                        <img data-id={item.id}
                          class="rounded-md w-20 h-20 md:h-28 md:w-28"  
                          src="{item.image_url}"
                          alt="demo"
                        />
                      </div>
                      
                    {/if}
          
                    
                </div>
  
                  
                <!-- <img
                    data-id={item.id}
                    on:click={() => selected = item}
                    
                    class="rounded-box"
                    alt="a thumbnail"
                    src="{item.image_url}"
                > -->
            {/if}    
        {/each}
            
        {/each}
    </div>

</div>
  
 
  