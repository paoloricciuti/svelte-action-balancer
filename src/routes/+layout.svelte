<script>
  import "@fontsource/alice";
  import "@fontsource/inter";
</script>

<slot />

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :global(a) {
    color: inherit;
    text-decoration: underline;
    text-decoration-thickness: from-font;
    text-underline-position: from-font;
    transition: opacity 0.2s ease;
  }
  :global(a):hover {
    opacity: 0.6;
  }
  :global(body) {
    margin: 0;
    -webkit-font-smoothing: subpixel-antialiased;
    color: #222;
    background-color: #f5f5f5;
    font-feature-settings: "ss04";
    line-height: 1.5;
    --w0: 320px;
    --w1: min(27.5vw, 480px);
    font-family: "Inter", sans-serif;
    --font-alice: "Alice", serif;
  }
  :global(h2) {
    margin: 10px 0 0;
    font-size: 22px;
  }
  :global(a):visited {
    color: inherit;
  }
  @media (max-width: 640px) {
    :global(body) {
      --w0: 200px;
      --w1: 80vw;
    }
  }
  @media screen and (max-width: 640px) {
    :global(blockquote) {
      font-size: 15px;
    }

    :global(h2) {
      font-size: 20px;
    }

    :global(h3) {
      font-size: 16px;
    }
  }
</style>
