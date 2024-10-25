<script lang="ts">
  import { base } from "$app/paths";
  import { blur } from "svelte/transition";
  import { quadOut } from "svelte/easing";
</script>

<svelte:head>
  <title>Home - ulong32.net</title>
  <meta property="og:title" content="Home - ulong32.net" />
</svelte:head>

<div class="container w-full mx-auto flex justify-center items-center">
  <div>
    <div in:blur={{duration:500, easing:quadOut}}>
      <h1 class="h1 m-5 text-center">Welcome to ulong32.net!</h1>
      <div class="h3 text-center">ulong32.netへようこそ!</div>
    </div>
    <div class="text-token w-full p-4">
      <nav class="list-nav">
        <ul class="card">
          <header class="card-header h2 text-center m-6">Contents</header>
          <li>
            <a href="{base}/about">
              <span class="i-lucide-user-round w-6 h-6"></span>
              <span class="flex-auto flex-col">
                <div>About</div>
                <div class="opacity-75">私について</div>
              </span>
              <span class="i-tabler-arrow-right w-6 h-6"></span>
            </a>
          </li>
          <li>
            <a href="{base}/tools">
              <span class="i-tabler-hammer w-6 h-6"></span>
              <span class="flex-auto flex-col">
                <div>Tools</div>
                <div class="opacity-75">作ったツールなど</div>
              </span>
              <span class="i-tabler-arrow-right w-6 h-6"></span>
            </a>
          </li>
          <li>
            <a href="{base}/links">
              <span class="i-lucide-link w-6 h-6"></span>
              <span class="flex-auto flex-col">
                <div >Links</div>
                <div class="opacity-75">各種サイトへのリンク</div>
              </span>
              <span class="i-tabler-arrow-right w-6 h-6"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
