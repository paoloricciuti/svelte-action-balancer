<script lang="ts">
  export let width = 50;
</script>

<div class="skeleton" style:--w={width} />

<style>
  .skeleton {
    display: inline-block;
    width: calc(var(--w) * 1%);
    height: 24px;
    margin-top: 24px;
    border-radius: 4px;
    background-color: #f5f5f5;
  }
</style>
