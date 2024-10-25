<script lang="ts">
  import { LightSwitch } from "@skeletonlabs/skeleton";
  let isShowLightSwitch: boolean = $state(false);
</script>
<div
class="fixed right-0 bottom-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm m-1.5 ml-0 p-0 pr-2 rounded transition-all duration-200"
class:!-right-16={!isShowLightSwitch}
class:hover:!-translate-x-2={!isShowLightSwitch}
>
  <div class="flex justify-center items-center">
    <div class="m-0 mr-2 h-full ">
      <button
      class="h-14 pl-2 py-2.5 flex items-center"
      onclick={() => {isShowLightSwitch = !isShowLightSwitch}}
      aria-label="Toggle LightSwitch"
      >
        <span
        class="i-lucide-arrow-left-from-line transition-all duration-200"
        class:rotate-180={isShowLightSwitch}></span>
      </button>
    </div>
    <div class="mt-1.5">
      <span class="flex-col justify-center">
        <div class="text-xs text-center">
          <span class="i-tabler-moon"></span>
          <span class="i-tabler-arrows-left-right"></span>
          <span class="i-tabler-sun"></span>
        </div>
        <div>
          <LightSwitch class="my-2" />
        </div>
      </span>
    </div>
  </div>
</div>
