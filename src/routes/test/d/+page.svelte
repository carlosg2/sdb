
<script>
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

    import { send, receive } from '@lib/components/helpers/libPageCrossfade'; // $lib/pageCrossfade.js
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="h-screen w-screen">
    <a href="./s" >
        <img class="h-96" src="/assets/images/arbitro.png"
        sveltekit:prefetch
        
        />
    </a>
</div>