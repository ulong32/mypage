<svelte:head>
    <title>Tools - ulong32.net</title>
    <meta property="og:title" content="Tools - ulong32.net">
</svelte:head>
<script lang="ts">
	import { blur } from "svelte/transition";
	import { quadOut } from "svelte/easing";
	const services = [
		{
			name: 'allb_News',
			description: 'ラスバレゲーム内お知らせの通知 & アーカイブサービス',
			links: [
				{
					icon: 'i-tabler-brand-twitter w-6 h-6',
					description: 'Twitterアカウント',
					destination: 'https://twitter.com/allb_news'
				},
				{
					icon: 'i-lucide-link w-5 h-5',
					description: 'Webサイト',
					destination: 'https://allb-news.ulong32.net'
				}
			]
		},
		{
			name: 'Shukuchi',
			description: 'ブラウザ版ラスバレ用のちょっと使いやすいプレイ環境',
			links: [
				{
					icon: 'i-tabler-brand-github w-6 h-6',
					description: 'GitHubリポジトリ',
					destination: 'https://github.com/ulong32/Shukuchi'
				}
			]
		},
		{
			name: 'LiliesNote',
			description: 'アサルトリリィのキャラクターの誕生日をエクスポートできるツール',
			links: [
				{
					icon: 'i-lucide-link w-5 h-5',
					description: 'Webサイト',
					destination: 'https://liliesnote.ulong32.net'
				},
				{
					icon: 'i-tabler-brand-github w-6 h-6',
					description: 'GitHubリポジトリ',
					destination: 'https://github.com/ulong32/LiliesNote'
				}
			]
		},
		{
			name: 'ワールドダイスター 誕生日ダウンローダー',
			description: 'ワールドダイスター登場キャラの誕生日をエクスポートできるツール',
			links: [
				{
					icon: 'i-lucide-link w-6 h-6',
					description: 'Webサイト',
					destination: 'https://ulong32.net/wds_bddownloader/'
				}
			]
		},
		{
			name: "アイプリバースアルバムダウンローダー",
			description: "アイプリ マイキャラルームのアルバム画像をダウンロードできるツール",
			links: [
				{
					icon: "i-lucide-chrome w-5 h-5",
					description: "Chrome ウェブストア",
					destination: "https://chrome.google.com/webstore/detail/meogmfoncolnmjnkpedhmfbbajmcdfng"
				}
			]
		}
	];
</script>

<div class="container mx-auto flex-col justify-center items-center text-center max-w-max">
	<div class="p-4" in:blur={{delay:100, duration:600, easing:quadOut}}>
		<h1 class="h1">Tools</h1>
		<div class="h3 opacity-80">今までに作ったツールなど</div>
	</div>

	{#each services as s}
		<div class="text-token card m-4">
			<header class="p-4">
				<div class="h2 my-2">{s.name}</div>
				<div class="opacity-90">{s.description}</div>
			</header>
			<nav class="list-nav">
				<ul class="list">
					{#each s.links as l}
						<li>
							<a href={l.destination} target="_blank" class="w-full">
								<span class={l.icon}></span>
								<span class="flex-auto text-left">{l.description}</span>
								<span class="i-tabler-arrow-right w-6 h-6"></span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	{/each}
</div>
