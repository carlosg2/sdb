<input class="checkbox" id="debug" type="checkbox" />
<label for="debug">Show Debug Outlines</label>



<section>
	<h2 class="mt-40 pt-40">Regular Carousel</h2>
	<div class="slider">
		<div class="slidewrapper">
			<div class="slide ">
				Item 1
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide">
				Item 2
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide">
				Item 3
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide">
				Item 4
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide">
				Item 5
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide">
				Item 6
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide">
				Item 7
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide">
				Item 8
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide">
				Item 9
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide">
				Item 10
			</div>
		</div>
	</div>
	
	<h2>Full-Bleed Carousel <em>(with Centered Content)</em></h2>
	<div class="slider full-bleed">
		<div class="slidewrapper">
			<div class="slide ">
				<div class="card w-full bg-base-100 shadow-xl">
                    <figure><img src="/assets/images/arbitro.png" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide bg-primary">
				Item 2
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide bg-primary">
				Item 3
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide bg-primary">
				Item 4
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide bg-primary">
				Item 5
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide bg-primary">
				Item 6
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide bg-primary">
				Item 7
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide bg-primary">
				Item 8
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide bg-primary">
				Item 9
			</div>
		</div>
		<div class="slidewrapper">
			<div class="slide bg-primary">
				Item 10
			</div>
		</div>
	</div>
	
	<!-- <footer>
		<p><em>Demo for <a href="https://www.bram.us/?p=28303" target="_top">https://www.bram.us/?p=28303</a></em></p>
	</footer> -->
</section>

<style>

:root {
	--column-size: min(100%, 1200px);
	--slider-size: min(100%, 360px);
	--slider-border-radius: 2em;
	--slider-fullbleed-gap: 40px;
}




h1, h2, footer {

	text-align: center;
}

section {
	width: var(--column-size);
	max-width: var(--column-size);
	border: 1px solid rgb(0 0 0 / 0.1);
	margin: 0 auto;
	min-height: 100vh;
	background: rgb(0 0 0 / 0.1);
}

.slider {
	display: flex;
	overflow-x: scroll;
	scroll-snap-type: x mandatory;
	
	width: var(--slider-size);
	margin: 1em auto;
	
	border-radius: var(--slider-border-radius);
}

/* Hide Scrollbar itself */
.slider {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.slider::-webkit-scrollbar {
  display: none;
}

.slidewrapper {
	scroll-snap-align: center;

	/* Size me */
	flex: 0 0 var(--slider-size);
	width: var(--slider-size);
	
	/* This is needed for the paddings (in the full-bleed variant) to work …*/
	box-sizing: content-box;

	/* To allow the child .slide to stretch out inside me */
	display: flex;
}

.slide {
	/* background: rgb(0 0 0 / 0.1); */
	
	/* Stretch me out in my .slidewrapper parent */
	flex: 1;
	
	/* Give me some height */
	min-height: 200px;
	/* aspect-ratio: 16/9; */
	
	/* Center text */
	display: grid;
	place-content: center;
}

/* @ref https://www.bram.us/2019/04/09/breaking-elements-out-of-their-containers-in-css-with-full-bleed/ */
.full-bleed {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
}

/* Put border-radius on the individual slides, not the slider-container */
.slider.full-bleed {
	border-radius: 0;
}
.slider.full-bleed .slide {
	border-radius: var(--slider-border-radius);
}

/* Add a faux gap between the slidewrappers */
.slider.full-bleed .slidewrapper {	
	margin-right: var(--slider-fullbleed-gap);
}

/* Offset first slidewrapper from the left so that it apppears centered on load */
.slider.full-bleed .slidewrapper:first-child {
	padding-left: calc(50vw - (var(--slider-size) / 2));
}

/* Offset last slidewrapper so that it apppears centered when at the last item */
/* Note that margin-right won't work …*/
.slider.full-bleed .slidewrapper:last-child {
	margin-right: 0;
	padding-right: calc(50vw - (var(--slider-size) / 2));
}


/* Debug Outlines */
#debug, [for="debug"] {
	position: absolute;
	top: 6em;
	left: 1em;
}
[for="debug"] {
	left: 2em;
	line-height: 1em;
}

#debug:checked ~ section .slider {	
	box-shadow: 0 0 0 4px hotpink;
}
#debug:checked ~ section .slidewrapper {
	box-shadow: inset 0 0 0 4px lime;
	background: rgb(120 255 0 / 0.2);
}
#debug:checked ~ section .slide {
	box-shadow: inset 0 0 0 4px gray;
}


</style>