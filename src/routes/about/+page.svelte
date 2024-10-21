<script lang="ts">
	import { blur } from "svelte/transition";
	import { quadOut } from "svelte/easing";
</script>

<svelte:head>
	<title>About - ulong32.net</title>
	<meta property="og:title" content="About - ulong32.net" />
</svelte:head>

<div class="container w-full mx-auto flex-col justify-center items-center">
	<div class="p-4 text-center" in:blur={{delay:100, duration:600, easing:quadOut}}>
		<h1 class="h1">About</h1>
		<div class="h3 opacity-80">私について</div>
	</div>

	<div class="card m-6 p-4">
		<div class="flex-col justify-center">
			<div class="flex justify-center p-4">
				<img src="/images/icon.png" class="rounded-full aspect-square backdrop-brightness-100 backdrop-blur-sm opacity-95" alt="アイコン" />
			</div>
			<div class="text-lg">
				<ul class="list">
					<li class="my-2">
						<span class="flex-auto text-lg">Name</span>
						<span class="text-right">
							<div class="text-xs">ゆーろん</div>
							<div>Ulong32</div>
						</span>
					</li>
					<hr class="!border-t-2" />
					<li class="my-2">
						<span class="flex-auto text-lg">From</span>
						<span class="text-right">Fukushima, Japan</span>
					</li>
					<hr class="!border-t-2" />
					<li class="my-2">
						<span class="flex-auto text-lg">Description</span>
						<span class="text-right text-sm">
							<div>下手の横好き。</div>
							<div>好きなようにいろいろ。</div>
						</span>
					</li>
					<hr class="!border-t-2" />
					<li>
						<span class="flex-auto text-center text-xl">Favorite</span>
					</li>
					<hr class="!border-dashed !border-t-2" />
					<li>
						<span class="flex-auto text-lg">Contents</span>
						<span class="text-right text-sm">
							<div>アサルトリリィ</div>
						</span>
					</li>
					<hr class="!border-t-2" />
					<li>
						<span class="flex-auto">Things</span>
						<span class="text-right text-sm">
							<div>音ゲー</div>
							<div>プログラミング</div>
						</span>
					</li>
					<hr class="!border-t-2" />
					<li>
						<span class="flex-auto">Skills</span>
						<span class="text-right text-sm">
							<div>HTML,CSS</div>
							<div>JavaScript</div>
							<div>(TypeScript)</div>
							<div>Svelte</div>
						</span>
					</li>
					<hr class="!border-t-2" />
				</ul>
			</div>
		</div>
	</div>
</div>
