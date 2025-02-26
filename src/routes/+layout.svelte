<script lang="ts">
  import Footer from '$lib/Footer.svelte';
  import '../app.postcss';
  import { AppBar } from '@skeletonlabs/skeleton';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { draw, fade } from "svelte/transition";
  import { modeCurrent } from "@skeletonlabs/skeleton";
  import LightSwitchArea from '$lib/LightSwitchArea.svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let titleOnHover = $state(false);
  let titleWidth = $state(0);
  const animationDuration = 200;
  const titleUnderlineOpacity = 0.9;
</script>

<svelte:head>
  <meta property="og:url" content={$page.url.href} />
</svelte:head>
<div class="flex flex-col min-h-screen transition-colors duration-300">
<AppBar gridColumns="grid-cols-2" slotDefault="place-content-start" slotTrail="place-content-end">
  <div class="font-semibold text-2xl relative">
    <a href="/"
      class="inline-block"
      onmouseenter={() => {titleOnHover = true}}
      onmouseleave={() => {titleOnHover = false}}
      bind:clientWidth={titleWidth}
    >ulong32.net</a>
    {#if titleOnHover}
      <svg width={titleWidth} height="2" xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 translate-y-0.5 pointer-events-none">
        <line x1="0" y1="1" x2={titleWidth} y2="1" stroke-opacity={titleUnderlineOpacity} stroke="currentColor" stroke-width="2" in:draw={{duration:animationDuration}} out:draw={{duration:1}} />
        <line x1={titleWidth} y1="1" x2=0 y2="1" stroke-opacity={titleUnderlineOpacity} stroke="currentColor" stroke-width="2" out:draw={{duration:animationDuration}} in:draw={{delay:animationDuration, duration:1}}/>
      </svg>
    {/if}
  </div>

  {#snippet trail()}
      <a href="{base}/about"
        class="flex-col justify-center p-1 transition-all hover:scale-110"
        class:activePageDark={$page.url.pathname.endsWith("about/") && $modeCurrent === false}
        class:activePageLight={$page.url.pathname.endsWith("about/") && $modeCurrent === true}
      >
        <div class="flex justify-center">
          <span class="i-lucide-user-round w-6 h-6"></span>
        </div>
        <div class="text-sm">About</div>
      </a>
      <a href="{base}/tools"
        class="flex-col justify-center p-1 transition-all hover:scale-110"
        class:activePageDark={$page.url.pathname.endsWith("tools/") && $modeCurrent === false}
        class:activePageLight={$page.url.pathname.endsWith("tools/") && $modeCurrent === true}
      >
        <div class="flex justify-center">
          <span class="i-tabler-hammer w-6 h-6"></span>
        </div>
        <div class="text-sm">Tools</div>
      </a>
      <a href="{base}/links"
        class="flex-col justify-center p-1 transition-all hover:scale-110"
        class:activePageDark={$page.url.pathname.endsWith("links/") && $modeCurrent === false}
        class:activePageLight={$page.url.pathname.endsWith("links/") && $modeCurrent === true}
      >
        <div class="flex justify-center">
          <span class="i-lucide-link w-5 h-6"></span>
        </div>
        <div class="text-sm">Links</div>
      </a>
      {/snippet}
</AppBar>
  {#key $page.url.pathname}
    <div class="grow mx-auto max-w-screen-md min-w-fit w-10/12" in:fade={{duration:400}}>
      {@render children?.()}
    </div>
  {/key}
  <Footer />
</div>

<LightSwitchArea />

<style>
  .activePageLight {
    @apply text-primary-500 bg-surface-200 rounded;
  }
  .activePageDark {
    @apply text-primary-500 bg-surface-700 rounded;
  }
</style>
