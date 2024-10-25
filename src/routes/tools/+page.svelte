<script lang="ts">
	import Title from "$lib/Title.svelte";
  const services = [
    {
      name: 'allb_News',
      description: 'ラスバレゲーム内お知らせの通知 & アーカイブサービス',
      badges: ["Twitter Bot", "Python"],
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
      badges: ["Electron", "JavaScript"],
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
      badges: ["Svelte", "JavaScript"],
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
      badges: ["Svelte", "JavaScript"],
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
      badges: ["Browser Extension", "JavaScript"],
      links: [
        {
          icon: "i-lucide-chrome w-5 h-5",
          description: "Chrome ウェブストア",
          destination: "https://chrome.google.com/webstore/detail/meogmfoncolnmjnkpedhmfbbajmcdfng"
        }
      ]
    }
  ];
  const icons: {[key:string]: string} = {
    "JavaScript": "i-ri-javascript-fill",
    "Python": "i-ion-logo-python",
    "Browser Extension": "i-ion-browsers",
    "Electron": "i-ion-logo-electron",
    "Svelte": "i-ri-svelte-line",
    "Twitter Bot": "i-tabler-brand-twitter-filled",
  }
</script>

<div class="container mx-auto flex-col justify-center items-center text-center max-w-max">
  <Title title="Tools" description="今までに作ったツールなど"/>
  {#each services as s}
    <div class="text-token card m-4">
      <header class="p-3">
        <div class="h2 my-2">{s.name}</div>
        <div class="opacity-90">{s.description}</div>
        <div class="text-left mt-3">
          {#each s.badges as badge}
            <span class="badge variant-soft mx-1">
              <span class="{icons[badge]} size-4"></span>
              <span class="!ml-1">{badge}</span>
            </span>
          {/each}
        </div>
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
