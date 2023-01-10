<script>
  import { balance } from "svelte-balance-action";
  let as = "React: A JavaScript library for building user interfaces";
  let enabled = false;
  let ratio = 0.5;
</script>

<input bind:checked={enabled} type="checkbox" />
<input bind:value={ratio} min="0" max="1" step="0.1" type="range" />
<h1 use:balance={{ enabled, ratio }}>{as}</h1>

<style>
  h1 {
    text-align: center;
    margin: auto;
  }
</style>
