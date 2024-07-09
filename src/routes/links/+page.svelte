<script>
	import { fade } from "svelte/transition";
</script>
<svelte:head>
	<title>Links - ulong32.net</title>
	<meta property="og:title" content="Links - ulong32.net" />
</svelte:head>
<div class="container w-full mx-auto flex-col justify-center items-center text-center" in:fade={{ delay: 200 }}>
	<div class="p-4">
		<h1 class="h1">Links</h1>
		<div class="h3 opacity-80">各種サイトへのリンク</div>
	</div>

	<div class="p-4 text-xl">
		<nav class="list-nav">
			<ul class="list card">
				<li>
					<a href="https://twitter.com/i/user/1023554612127625216" target="_blank" class="w-full">
						<span class="i-tabler-brand-twitter w-6 h-6"></span>
						<span class="flex-auto text-left">Twitter</span>
						<span class="i-tabler-arrow-right w-6 h-6"></span>
					</a>
				</li>
				<li>
					<a href="https://github.com/ulong32" target="_blank" class="w-full">
						<span class="i-tabler-brand-github w-6 h-6"></span>
						<span class="flex-auto text-left">GitHub</span>
						<span class="i-tabler-arrow-right w-6 h-6"></span>
					</a>
				</li>
				<li>
					<a
						href="https://discord.com/users/683861447033356309"
						target="_blank"
						class="w-full leading-4 justify-center"
					>
						<span class="i-tabler-brand-discord w-6 h-6"></span>
						<span class="flex-auto text-left align-top">Discord</span>
						<span class="i-tabler-arrow-right w-6 h-6"></span>
					</a>
				</li>
				<li>
					<a href="https://misskey.io/@ulong32" target="_blank" class="w-full">
						<span class="i-lucide-link w-5 h-5"></span>
						<span class="flex-auto text-left">Misskey.io</span>
						<span class="i-tabler-arrow-right w-6 h-6"></span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</div>
