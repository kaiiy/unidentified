<template>
  <div :style="marginStyle"></div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { CanvasSize, WindowSize } from '~/assets/js/screen'
import { headerHeight } from '~/assets/js/header'

export default defineComponent({
  props: {
    canvasSize: {
      type: Object as PropType<CanvasSize>,
      required: true,
      default: () => ({}),
    },
    windowSize: {
      type: Object as PropType<WindowSize>,
      required: true,
      default: () => ({}),
    },
  },
  setup(props) {
    const marginStyle = computed(() => {
      const height = Math.max((props.windowSize.y - props.canvasSize.y) / 2, headerHeight)
      return {
        height: `${height}px`,
        width: "100%"
      }
    })

    return {
      marginStyle
    }
  }
})
</script>