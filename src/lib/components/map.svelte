<script>
    import { onMount, onDestroy } from 'svelte'
    import { Map, NavigationControl, Marker, AttributionControl } from 'maplibre-gl';
    import { goto } from '$app/navigation';
    import 'maplibre-gl/dist/maplibre-gl.css';
    import geoj from '$lib/data/geojson.json';



  
    let map;
    let mapContainer;

    let geojson = geoj;

    let selectedId = -1;

  
    onMount(() => {
  
      // const { env } = _process;
      // const apiKey = env.API_KEY;
      // if (!apiKey) {
      //   throw new Error("You need to configure env API_KEY first, see README");
      // }
  
      const initialState = { lng: -100.2893739, lat: 25.7043, zoom: 8 }; 
    
      map = new Map({
        container: mapContainer,
        style: `https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`, // `https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom, attributionControl: false
      });
      
      map.addControl(new NavigationControl(), 'bottom-right');
      //map.addControl(new AttributionControl({compact: true}))

      map.easeTo({ padding: {top: 70}})

      // new Marker({color: "#FF0000"})
      //   .setLngLat([-100.2893739,25.7043397])  
      //   .addTo(map); 


      class ClickableMarker extends Marker {
          // new method onClick, sets _handleClick to a function you pass in
          onClick(handleClick) {
            this._handleClick = handleClick;
            return this;
          }

          // the existing _onMapClick was there to trigger a popup
          // but we are hijacking it to run a function we define
          _onMapClick(e) {
            const targetElement = e.originalEvent.target;
            const element = this._element;

            if (this._handleClick && (targetElement === element || element.contains((targetElement)))) {
              this._handleClick();
            }
          }
        };


        geojson.features.forEach(function (marker)
        {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker hover:scale-150';
        el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';
        
        el.addEventListener('click', function () {
          window.alert(selected = marker.properties.storeid);
        });
 
        // add marker to map /  ej.new Marker(el, {offset:[20, -10]})
        new ClickableMarker({color:'#ff0000'})
        .setLngLat(marker.geometry.coordinates)
        .onClick(() => { goto(`/` + marker.properties.storeid + '/menu') })
        .addTo(map);
        })

 

        
  
    });
  
    onDestroy(() => {
          //map.remove();
      });
  </script>
  
  <div class="relative w-full h-full">
    <!-- <a href="https://www.maptiler.com" class="watermark"><img
        src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/></a> -->
    <div class="map" id="map" bind:this={mapContainer}></div>
  </div>
  
  <style>
  
 
  
  .map {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .watermark {
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 999;
  }

  .marker {
    display: block;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
  }

  </style>