<script lang="ts">
    import { LightSwitch } from "@skeletonlabs/skeleton";
    let isShowLightSwitch = false;
    let isHoverLightSwitch = false;
</script>
<div
class="fixed right-0 bottom-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm m-1.5 p-1.5 rounded transition-all duration-200"
class:!-right-16={!isShowLightSwitch}
class:!-right-14={!isShowLightSwitch && isHoverLightSwitch}
>
    <div class="flex justify-center items-center">
        <div class="m-0 mr-2 h-full">
            <button
            class="h-12"
            on:click={() => {isShowLightSwitch = !isShowLightSwitch}}
            on:mouseenter={() => {isHoverLightSwitch = true}}
            on:mouseleave={() => {isHoverLightSwitch = false}}
            >
                <span class="i-lucide-arrow-left-from-line transition-all duration-200" class:rotate-180={isShowLightSwitch}></span>
            </button>
        </div>
        <div>
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
