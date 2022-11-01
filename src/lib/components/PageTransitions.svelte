<script>
    import { fly } from 'svelte/transition';
    export let refresh = '';
</script>
  
{#key refresh}
    <div
      in:fly="{{ y: -15, duration: 400, delay: 200 }}"
      out:fly="{{ y: -50, duration: 250 }}" 
      >
      <slot/> 
      
      <!-- out:fly="{{ y: -50, duration: 250 }}"  -->
    </div>
{/key}