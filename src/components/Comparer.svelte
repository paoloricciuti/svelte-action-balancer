<script>
  let value = 55;
</script>

<div class="demo-container">
  <div class="controller">
    <input type="range" bind:value />
  </div>
  <slot {value} />
</div>

<style>
  .demo-container {
    max-width: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .controller {
    position: relative;
    align-self: center;
    display: flex;
    align-items: center;
    width: auto;
    height: 32px;
    padding: 5px 10px;
    font-size: 15px;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  .controller:before {
    border-bottom: 10px solid #fff;
    border-right: 10px solid #fff;
    border-bottom-right-radius: 20px;
    left: -10px;
    -webkit-clip-path: inset(0 10px 10px 0);
    clip-path: inset(0 10px 10px 0);
  }
  .controller:after {
    border-bottom: 10px solid #fff;
    border-left: 10px solid #fff;
    border-bottom-left-radius: 20px;
    right: -10px;
    -webkit-clip-path: inset(0 0 10px 10px);
    clip-path: inset(0 0 10px 10px);
  }
  .controller input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #dedede;
    height: 3px;
    border-radius: 3px;
  }

  @media (max-width: 640px) {
    .demo-container {
      flex-direction: column-reverse;
    }
    .controller {
      position: -webkit-sticky;
      position: sticky;
      z-index: 1;
      bottom: 25px;
      margin-top: 15px;
      border: 1px solid #e5e5e5;
      border-radius: 20px;
      box-shadow: 0 5px 10px rgb(0 0 0/4%);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background: hsla(0, 0%, 100%, 0.83);
    }
    .controller:after,
    .controller:before {
      display: none;
    }
  }
</style>
