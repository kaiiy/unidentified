<template>
  <!-- Start.vue用  -->
  <div :class="$style['btn-wrapper']" :style="btnWrapperStyle">
    <v-btn color="#fafafa" :class="$style['start-btn']" @click="clickStartBtn">スタート</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from '@vue/composition-api'
import { BaseStyle } from '~/assets/js/screen'

export default defineComponent({
  props: {
    baseStyle: {
      type: Object as PropType<BaseStyle>,
      required: true,
    },
  },
  setup(props, context) {
    // ボタンのラップ
    const btnWrapperStyle = computed(() => {
      return {
        height: `${props.baseStyle.height + props.baseStyle.margin * 2}px`,
      }
    })

    // スタートボタン 
    const clickStartBtn = (): void => {
      context.emit('clickStartBtn')
    }
    return {
      btnWrapperStyle,
      clickStartBtn
    }
  }

})
</script>

<style module>
.btn-wrapper {
  position: relative;
  width: 100%;
}

.start-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>