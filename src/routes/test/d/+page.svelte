
<script>
	// import { quintOut } from 'svelte/easing';
	// import { crossfade } from 'svelte/transition';
	// import { flip } from 'svelte/animate';
    // import { send, receive } from '@lib/components/helpers/libPageCrossfade'; // $lib/pageCrossfade.js

    import {crossfade} from '@lib/components/helpers/crossfade'
    const [send, receive] = crossfade

</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="h-screen w-screen absolute">
    <a href="./s" >
        <img class="h-96" src="/assets/images/arbitro.png"
        sveltekit:prefetch
        in:receive={{ key: "block" }}
        out:send={{ key: "block" }}
        />
    </a>
</div>