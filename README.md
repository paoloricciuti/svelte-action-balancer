# svelte-action-balancer

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

![npm bundle size](https://img.shields.io/bundlephobia/minzip/svelte-action-balancer)

![npm](https://img.shields.io/npm/v/svelte-action-balancer)

![npm](https://img.shields.io/npm/dt/svelte-action-balancer)

![GitHub last commit](https://img.shields.io/github/last-commit/paoloricciuti/svelte-action-balancer)

## Introduction

[**svelte-action-balancer**](https://svelte-action-balancer.netlify.app) is a super-simple svelte action, heavily inspired by [**react-wrap-balancer**](https://github.com/shuding/react-wrap-balancer) that makes your titles more readable in different viewport sizes. It improves the wrapping to avoid situations like single word in the last line, makes the content more “balanced”:

![](.github/demo.gif)

## Usage

To start using the library, install it to your project:

```bash
npm i svelte-action-balancer
```

Then you can simply use your action on the element

```svelte
<script>
  import { balancer } from "svelte-action-balancer";
</script>

<h1 use:balancer={{ enabled: true, ratio: .5 }}>
    Svelte: A much cooler JavaScript library for building user interfaces
</h1>

<style>
  h1 {
    text-align: center;
    margin: auto;
  }
</style>

```

For full documentation and use cases, please visit [**svelte-action-balancer.netlify.app**](https://svelte-action-balancer.netlify.app).

## About

This project was inspired by [**react-wrap-balancer**](https://github.com/shuding/react-wrap-balancer) which was in turn inspired by Adobe’s [balance-text](https://github.com/adobe/balance-text) project, NYT’s [text-balancer](https://github.com/nytimes/text-balancer) project, and Daniel Aleksandersen’s [Improving the New York Times’ line wrap balancer](https://www.ctrl.blog/entry/text-wrap-balance.html). If you want to learn more, you can also take a look at the [text-wrap: balance](https://drafts.csswg.org/css-text-4/#text-wrap) proposal.
