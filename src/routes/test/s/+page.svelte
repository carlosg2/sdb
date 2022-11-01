
<!-- svelte-ignore a11y-missing-attribute -->
<script>
    import { send, receive } from '@lib/components/helpers/libPageCrossfade'; // $lib/pageCrossfade.js
    export let route;
</script>

<div class="h-screen w-screen">
    <a href="./d" >
        <img class="h-52" src="/assets/images/arbitro.png" 
        sveltekit:prefetch

        />
    </a>
</div>