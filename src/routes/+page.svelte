<script lang="ts">
  import Comparer from "../components/Comparer.svelte";
  import { balancer } from "svelte-action-balancer";
  import Skeleton from "../components/Skeleton.svelte";

  let copied = false;
</script>

<main>
  <small style="width: auto">
    ⚠️ This is a blatant copy of <a
      href="https://react-wrap-balancer.vercel.app/"
      target="_blank"
      rel="noopener noreferrer">react-wrap-balancer.vercel.app</a
    >
  </small>
  <div class="logo-container">
    <a
      href="https://github.com/paoloricciuti/svelte-action-balancer"
      target="_blank"
      rel="noreferrer noopener"
      class="logo">Svelte<br />Action<br />Balancer</a
    >
  </div>
  <p use:balancer class="headline">
    A Simple Svelte Action That Makes Titles More Readable
  </p>
  <Comparer let:value>
    <div style:--perc={value} class="demo">
      <div>
        <legend>Default</legend>
        <div class="item">
          <h2>
            Svelte: A cooler JavaScript library for building user interfaces
          </h2>
          <Skeleton width={60} />
          <Skeleton width={80} />
          <Skeleton width={75} />
        </div>
      </div>
      <div>
        <legend>With Balancer</legend>
        <div class="item">
          <h2 use:balancer>
            Svelte: A cooler JavaScript library for building user interfaces
          </h2>
          <Skeleton width={60} />
          <Skeleton width={80} />
          <Skeleton width={75} />
        </div>
      </div>
    </div>
  </Comparer>
  <h3 use:balancer>
    Svelte Action Balancer avoids single hanging word on the last line
  </h3>
  <p class="headline">Getting Started</p>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <p
    on:click={() => {
      navigator.clipboard
        .writeText("npm install svelte-action-balancer")
        .then(() => {
          copied = true;
          setTimeout(() => (copied = false), 1000);
        });
    }}
  >
    <label>Installation</label><code class="installation"
      >npm install svelte-action-balancer<span class="copy"
        ><svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {#if copied}
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            />
          {:else}
            <path
              d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke="currentColor"
              stroke-width="0.1"
            />
          {/if}
        </svg>
      </span></code
    >
  </p>
  <p>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Usage</label><span>You can just import and use the action:</span
    ><code>
      <span class="hl-fade">&lt;script&gt;</span><br />
      <span class="hl-fade">import </span><span class="hl-highlighted"
        >{"{ balancer }"}</span
      ><span class="hl-fade">{" from "}</span><span class="hl-highlighted"
        >'svelte-action-balancer'</span
      ><br /><span class="hl-fade"
        >&lt;/script&gt;<br /><br />// ...<br /><br />&lt;h1</span
      > <span class="hl-highlighted">use:balancer</span><span class="hl-fade"
        >&gt;<br /> My Title<br />&lt;/h1&gt;</span
      ></code
    >
  </p>
  <div class="p">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Features</label>
    <ul>
      <li>158 B Gzipped</li>
      <li>Fast O(log n) algorithm</li>
      <li>Works perfectly with web fonts</li>
    </ul>
  </div>
  <p>
    <a
      href="https://github.com/paoloricciuti/svelte-action-balancer"
      target="_blank"
      rel="noreferrer noopener"
      class="github-link"
      ><span>View project on</span>
      <span>
        <svg
          width="1.1em"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
        GitHub
      </span>
    </a>
  </p>
  <p class="headline">Custom Balance Ratio</p>
  <Comparer let:value>
    <div class="demo" style="width:480px;max-width:100%">
      <div style="text-align:center;position:relative">
        <div class="ratio-wrapper">
          <h2 class="ratio-ruler">
            <span use:balancer>The quick brown fox jumps over the lazy dog</span
            >
          </h2>
          <h2 class="ratio-title" use:balancer={{ ratio: value / 100 }}>
            The quick brown fox jumps over the lazy dog
          </h2>
          <code style="padding-top: 1rem; margin: 0"
            >use:balancer={`{{ ratio: ${(1 - value / 100).toFixed(2)} }}`}</code
          >
        </div>
      </div>
    </div>
  </Comparer>
  <h3 use:balancer>
    Adjust the balance ratio to a custom value between 0 (loose) and 1 (compact,
    the default)
  </h3>
  <p class="headline" use:balancer>How Does It Work?</p>
  <p>
    Svelte Action Balancer reduces the width of the content wrapper as much as
    it could, before causing an extra line break. When reaching the minimum
    width, each line will approximately have the same width, and look more
    compact and balanced.
  </p>
  <p>
    Check out the<!-- -->
    <a
      href="https://github.com/paoloricciuti/svelte-action-balancer"
      target="_blank"
      rel="noopener noreferrer">GitHub Repository</a
    >
    <!-- -->to learn more.
  </p>
  <p class="headline">Use Cases</p>
  <Comparer let:value>
    <div style:--perc={value} style="text-align: inherit" class="demo">
      <div>
        <legend>Default</legend>
        <div class="item">
          <h2>
            第六個沉思：論物質性東西的存在；論人的靈魂和肉體之間的實在區別
          </h2>
          <Skeleton width={60} />
          <Skeleton width={80} />
          <Skeleton width={75} />
        </div>
      </div>
      <div>
        <legend>With Balancer</legend>
        <div class="item">
          <h2 use:balancer>
            第六個沉思：論物質性東西的存在；論人的靈魂和肉體之間的實在區別
          </h2>
          <Skeleton width={60} />
          <Skeleton width={80} />
          <Skeleton width={75} />
        </div>
      </div>
    </div>
  </Comparer>
  <h3 use:balancer>Left aligned, non-latin content</h3>
  <Comparer let:value>
    <div style:--perc={value} style="text-align: inherit" class="demo">
      <div>
        <legend>Default</legend>
        <blockquote class="item">
          <span
            >You have wakened not out of sleep, but into a prior dream, and that
            dream lies within another, and so on, to infinity, which is the
            number of grains of sand. The path that you are to take is endless,
            and you will die before you have truly awakened.</span
          ><br />- Jorge Luis Borges
        </blockquote>
      </div>
      <div>
        <legend>With Balancer</legend>
        <blockquote class="item">
          <span use:balancer
            >You have wakened not out of sleep, but into a prior dream, and that
            dream lies within another, and so on, to infinity, which is the
            number of grains of sand. The path that you are to take is endless,
            and you will die before you have truly awakened.</span
          ><br />- Jorge Luis Borges
        </blockquote>
      </div>
    </div>
  </Comparer>
  <h3 use:balancer>
    Makes multi-line content more compact with fewer visual changes when
    resizing
  </h3>
  <p class="headline">Performance Impact</p>
  <p style="text-align:left;font-size:14px">
    It is worth to mention that this project is a workaround for the lack of
    native support for balanced text wrapping in CSS. It is not perfect as it
    adds some performance overhead. However, the performance impact is usually
    very trivial and can be ignored in most cases.
  </p>
  <p style="text-align:left;font-size:14px">
    The following benchmark (<a
      href="https://github.com/shuding/react-wrap-balancer/tree/main/test/benchmark"
      target="_blank"
      rel="noreferrer">source</a
    >) is done by measuring the script execution time of X balanced titles when
    loading the webpage (<a
      href="https://gist.github.com/shuding/1554c7bf31efb389c9960758e9f27274"
      target="_blank"
      rel="noreferrer">raw data</a
    >):
  </p>
  <a
    href="https://react-wrap-balancer.vercel.app/bench.svg"
    target="_blank"
    rel="noreferrer"
    class="benchmark"
    ><img
      style="width: 100%"
      src="https://react-wrap-balancer.vercel.app/bench.svg"
      alt="Benchmark result"
    /></a
  >
  <p style="text-align:left;font-size:14px">
    It shows that when there are less than 100 elements with React Wrap Balancer
    in the initial HTML, the per-element impact to the page load time is less
    than 0.25 ms. When there are 1,000 elements, that number increases to ~1 ms.
    When there are 5,000 elements, the per-element script execution time becomes
    ~7 ms.
  </p>
  <p style="text-align:left;font-size:14px">
    These numbers don’t scale linearly because re-layouts usually have an impact
    to other elements on the page. Hence the best practice is to only use this
    library for title elements when necessary, or use it for content that is
    behind user interactions (e.g. tooltips), to avoid negative impacts to the
    page performance.
  </p>
  <p use:balancer class="headline">About Svelte Action Balancer</p>
  <p use:balancer style="text-align:left;font-size:14px;justify-content:center">
    This project was inspired by Shu Ding <a
      href=" https://react-wrap-balancer.vercel.app/"
      target="_blank">react-wrap-balancer</a
    >
    which was in turn inspired by Adobe’s<!-- -->
    <a href=" https://github.com/adobe/balance-text" target="_blank"
      >balance-text</a
    >
    <!-- -->project, NYT’s<!-- -->
    <a
      href="https://github.com/nytimes/text-balancer"
      target="_blank"
      rel="noreferrer">text-balancer</a
    >
    <!-- -->project, and Daniel Aleksandersen’s<!-- -->
    <a
      href="https://www.ctrl.blog/entry/text-wrap-balance.html"
      target="_blank"
      rel="noreferrer">Improving the New York Times’ line wrap balancer</a
    >. If you want to learn more, you can also take a look at the<!-- -->
    <span class="code"
      ><a
        href="https://drafts.csswg.org/css-text-4/#text-wrap"
        target="_blank"
        rel="noreferrer">text-wrap: balance</a
      ></span
    >
    <!-- -->proposal.
  </p>
</main>

<style>
  small {
    position: fixed;
    left: 0;
    top: 0;
    background-color: #f5f5f5;
    padding: 0.5rem;
    border-bottom-right-radius: 1rem;
    z-index: 100;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    margin: 0 auto;
    max-width: 1800px;
  }
  main > :global(*) {
    width: 100%;
    max-width: 600px;
  }
  .logo-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .logo {
    display: inline-block;
    border: 5px solid;
    padding: 0 6px 0 4px;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: -0.021em;
    line-height: 34px;
    margin: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border-radius: 7px;
    align-self: center;
    text-decoration: none;
    -webkit-mask-image: linear-gradient(
      45deg,
      #000 25%,
      rgba(0, 0, 0, 0.2) 50%,
      #000 75%
    );
    mask-image: linear-gradient(
      45deg,
      #000 25%,
      rgba(0, 0, 0, 0.2) 50%,
      #000 75%
    );
    -webkit-mask-size: 800%;
    mask-size: 800%;
    -webkit-mask-position: 0;
    mask-position: 0;
  }
  a.logo:hover {
    transition: mask-position 2s ease, -webkit-mask-position 2s ease;
    -webkit-mask-position: 120%;
    mask-position: 120%;
    opacity: 1;
  }

  .demo {
    display: flex;
    gap: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0/8%),
      0 3px 10px -6px rgba(0, 0, 0, 0.1);
    width: calc(
      calc(var(--perc) * 1%) + calc(1 - var(--perc) / 100) * var(--w0)
    );
    text-align: center;
    transition: width 250ms;
  }
  .demo > div {
    flex: 1 1;
  }
  .demo legend {
    font-size: 13px;
    margin-bottom: 5px;
    padding: 0;
    text-align: left;
    color: #888;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  .demo .item {
    border: 1px dashed var(--color, transparent);
    border-radius: 2px;
    transition: border-color 0.5s ease;
  }
  h2 {
    margin-inline: auto;
  }
  .controller:active + .demo .item {
    border-color: #229dff;
  }
  .headline {
    text-align: center;
    font-family: var(--font-alice);
    margin: 80px 0 50px;
    font-size: 26px;
    letter-spacing: -0.04rem;
    line-height: 1.45;
  }
  h3 {
    text-align: center;
    font-family: var(--font-alice);
    margin: 30px 0 80px;
    color: #888;
    font-weight: 400;
  }
  .headline {
    text-align: center;
    font-family: var(--font-alice);
    margin: 80px 0 50px;
    font-size: 26px;
    letter-spacing: -0.04rem;
    line-height: 1.45;
  }
  h3 + .headline {
    margin-top: 10px;
  }

  .installation {
    cursor: copy;
    transition: all 0.2s ease;
  }

  .installation:hover {
    background-color: #ffffffaa;
  }

  .installation:active .copy {
    opacity: 0.2;
  }

  .copy {
    position: absolute;
    right: 8.6px;
    width: 2em;
    height: 2em;
    border-radius: 1em;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    margin: auto;
    transition: all 0.1s ease;
  }

  .copy svg {
    animation: fadein 0.5s ease forwards;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  label {
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    display: block;
    letter-spacing: 0.04rem;
    margin: 1.5em 0 8px;
    color: #888;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  .code,
  code {
    font-family: SF Mono, SFMono-Regular, ui-monospace, Menlo, Consolas,
      monospace;
  }

  code {
    position: relative;
    background: #fff;
    display: block;
    border-radius: 6px;
    padding: 10px 12px;
    font-size: 14px;
    line-height: 1.75;
    margin: 8px 0 1.5em;
    white-space: pre-wrap;
    letter-spacing: 0;
  }

  code:last-child {
    margin-bottom: 0;
  }

  .code {
    font-size: 0.92em;
    letter-spacing: 0;
  }

  code .hl-fade {
    color: #888;
  }

  code .hl-highlighted {
    --color: rgba(0, 0, 0, 0.04);
    background: var(--color);
    box-shadow: 0 0 0 3px var(--color);
    border-radius: 2px;
  }

  .p,
  p {
    font-size: 15px;
    line-height: 1.8;
    margin: 0 0 1.5em;
    letter-spacing: -0.01em;
  }

  ul {
    margin: 0;
    padding-left: 18px;
  }

  .github-link {
    margin: 0.8em 0;
    font-size: 14px;
    gap: 0.3em;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  .github-link,
  .github-link span {
    display: inline-flex;
    align-items: center;
  }

  .github-link span {
    gap: 0.2em;
  }

  .ratio-wrapper {
    background: #fff2e0;
  }

  h2.ratio-ruler span {
    position: relative;
    border-right: 1px dashed #c59759;
    border-left: 1px dashed #c59759;
    margin-inline: auto;
  }

  h2.ratio-title {
    background: #cdebff;
    z-index: 3;
  }

  h2.ratio-ruler span:after,
  h2.ratio-ruler:after {
    content: "0";
    position: absolute;
    top: 100%;
    left: 0;
    font-size: 11px;
    transform: translateX(-50%);
    margin-top: 2px;
    margin-left: -1px;
    font-weight: 400;
    color: black;
  }

  h2.ratio-ruler {
    margin-top: 0;
    position: absolute;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    pointer-events: none;
    z-index: 1;
    margin: auto;
    border-right: 1px dashed #2d76a7;
    border-left: 1px dashed #2d76a7;
  }

  h2.ratio-ruler span {
    color: transparent;
  }

  h2.ratio-ruler:after {
    content: "1";
  }

  blockquote {
    line-height: 1.65;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-alice);
    margin: 0 0 20px;
    font-size: 15px;
  }

  blockquote:before {
    content: "“";
    display: block;
    font-size: 80px;
    text-align: center;
    color: #ddd;
    margin-bottom: -40px;
  }

  .benchmark {
    display: flex;
    padding: 20px 16px;
    box-sizing: border-box;
    width: calc(100vw - 32px);
    max-width: 700px;
    background-color: #fff;
    border-radius: 6px;
    margin: 0 0 1.5em;
  }

  @media (max-width: 640px) {
    .demo {
      flex-direction: column;
    }
    .headline {
      font-size: 22px;
    }

    h2.ratio-ruler,
    h2.ratio-title {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 450px) {
    h2.ratio-ruler,
    h2.ratio-title {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 390px) {
    h2.ratio-ruler,
    h2.ratio-title {
      font-size: 16px;
    }
  }
</style>
