<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<meta property="og:url" content={$page.url.href} />
</svelte:head>

<AppBar gridColumns="grid-cols-2" slotDefault="place-content-start" slotTrail="place-content-end">
	<span class="font-semibold text-2xl"><a href="/">ulong32.net</a></span>

	<svelte:fragment slot="trail">
		<!--
		<span class="flex-col justify-center">
			<div>
				<LightSwitch class="my-2" />
			</div>
			<div class="text-xs text-center">
				<span class="i-tabler-moon"></span>
				<span class="i-tabler-arrows-left-right"></span>
				<span class="i-tabler-sun"></span>
			</div>
		</span>
		-->
		<a href="{base}/about" class="flex-col justify-center">
			<div class="flex justify-center">
				<span class="i-lucide-user-round w-6 h-6"></span>
			</div>
			<div class="text-sm">About</div>
		</a>
		<a href="{base}/tools" class="flex-col justify-center">
			<div class="flex justify-center">
				<span class="i-tabler-hammer w-6 h-6"></span>
			</div>
			<div class="text-sm">Tools</div>
		</a>
		<a href="{base}/links" class="flex-col justify-center">
			<div class="flex justify-center">
				<span class="i-lucide-link w-5 h-6"></span>
			</div>
			<div class="text-sm">Links</div>
		</a>
	</svelte:fragment>
</AppBar>
<slot />
<Footer></Footer>
