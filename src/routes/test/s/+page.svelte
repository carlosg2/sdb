
<!-- svelte-ignore a11y-missing-attribute -->
<script>
    // import { send, receive } from '@lib/components/helpers/libPageCrossfade'; // $lib/pageCrossfade.js
    // export let route;

    import {crossfade} from '@lib/components/helpers/crossfade'
    const [send, receive] = crossfade
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="absolute">
    <div class="grid h-screen w-screen place-items-center  ">
        <a class="w-22 " href="./d" >
            <img  src="/assets/images/arbitro.png"
            sveltekit:prefetch
            in:receive={{ key: "block" }}
            out:send={{ key: "block" }}
            />
        </a>
    </div>
</div>