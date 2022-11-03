import { crossfade as svelteCrossfade } from 'svelte/transition';
import { expoInOut, quartOut } from 'svelte/easing';

export const crossfade = svelteCrossfade({
    duration: 600,
    easing: quartOut

    
});