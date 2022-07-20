<template>
    <v-main>
        <v-container fluid>
            <v-row>
                <TopMargin :canvas-size="canvasSize" :window-size="windowSize" />
            </v-row>
            <v-row>
                <v-col></v-col>
                <slot></slot>
                <v-col></v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted, onUnmounted } from '@vue/composition-api'

import TopMargin from "@/components/screen/TopMargin.vue"

import { CanvasSize, WindowSize } from '~/assets/js/screen'

export default defineComponent({
    components: {
        TopMargin
    },
    props: {
        canvasSize: {
            type: Object as PropType<CanvasSize>,
            required: true,
            default: () => ({
                x: 0,
                y: 0
            })
        },
    },
    setup() {
        const windowSize = ref<WindowSize>({
            x: 0,
            y: 0,
        })

        const updateWindowSize = () => {
            windowSize.value = {
                x: window.innerWidth,
                y: window.innerHeight,
            }
        }

        onMounted(() => {
            updateWindowSize()

            window.addEventListener("resize", updateWindowSize)
        })
        onUnmounted(() => {
            window.removeEventListener("resize", updateWindowSize)
        })

        return {
            windowSize
        }
    }
})
</script>

<style scoped>
* {
    caret-color: transparent;
}
</style>