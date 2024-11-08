<script lang="ts">
  import { blur } from "svelte/transition";
  import { quadOut } from "svelte/easing";

  const { title, description } = $props();
</script>

<svelte:head>
  <title>{title} - ulong32.net</title>
  <meta property="og:title" content="{title} - ulong32.net" />
</svelte:head>

<div class="p-4 text-center" in:blur={{duration:500, easing:quadOut}}>
  <h1 class="h1">{title}</h1>
  <div class="h3 opacity-80">{description}</div>
</div>
