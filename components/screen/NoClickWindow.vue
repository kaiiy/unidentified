<template>
    <div :class="$style.windowContent" :style="contentStyle" v-resize="awaitResize"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import { getContentStyle, createContentStyle, awaitResizeBase } from '~/assets/js/screen'

export default defineComponent({
    setup() {
        // 初期化 
        const contentStyle = createContentStyle()

        const onResize = () => {
            contentStyle.value = getContentStyle()
        }
        const awaitResize = async () => {
            await awaitResizeBase(onResize)
        }

        return {
            contentStyle,
            awaitResize
        }
    }
})
</script>

<style module>
.windowContent {
    z-index: 100;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
}
</style>