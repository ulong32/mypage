<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { fade } from "svelte/transition";
	import { modeCurrent } from "@skeletonlabs/skeleton";
	import LightSwitchArea from '$lib/LightSwitchArea.svelte';

	let titleOnHover = false;
</script>

<svelte:head>
	<meta property="og:url" content={$page.url.href} />
</svelte:head>
<div class="flex flex-col min-h-screen">
<AppBar gridColumns="grid-cols-2" slotDefault="place-content-start" slotTrail="place-content-end">
	<span class="font-semibold text-2xl">
		<a href="/"
			on:mouseenter={() => {titleOnHover = true}}
			on:mouseleave={() => {titleOnHover = false}}
		>ulong32.net</a>
	</span>

	<svelte:fragment slot="trail">
		<a href="{base}/about"
			class="flex-col justify-center p-1 transition-all duration-200 hover:scale-105"
			class:activePageDark={$page.url.pathname.endsWith("about/") && $modeCurrent == false}
			class:activePageLight={$page.url.pathname.endsWith("about/") && $modeCurrent == true}
		>
			<div class="flex justify-center">
				<span class="i-lucide-user-round w-6 h-6"></span>
			</div>
			<div class="text-sm">About</div>
		</a>
		<a href="{base}/tools"
			class="flex-col justify-center p-1 transition-all duration-200 hover:scale-105"
			class:activePageDark={$page.url.pathname.endsWith("tools/") && $modeCurrent == false}
			class:activePageLight={$page.url.pathname.endsWith("tools/") && $modeCurrent == true}
		>
			<div class="flex justify-center">
				<span class="i-tabler-hammer w-6 h-6"></span>
			</div>
			<div class="text-sm">Tools</div>
		</a>
		<a href="{base}/links"
			class="flex-col justify-center p-1 transition-all duration-200 hover:scale-105"
			class:activePageDark={$page.url.pathname.endsWith("links/") && $modeCurrent == false}
			class:activePageLight={$page.url.pathname.endsWith("links/") && $modeCurrent == true}
		>
			<div class="flex justify-center">
				<span class="i-lucide-link w-5 h-6"></span>
			</div>
			<div class="text-sm">Links</div>
		</a>
	</svelte:fragment>
</AppBar>
	{#key $page.url.pathname}
		<div class="grow" in:fade={{duration:400}}>
			<slot />
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
