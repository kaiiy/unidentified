<template>
  <v-btn
    :height="size"
    :width="size"
    min-width="20"
    min-height="20"
    :class="['pa-0', $style['disable-dbl-tap-zoom'], $style['active-btn']]"
    :color="color"
    :style="btnStyle"
    @click="clickFunc"
  >
    <v-icon v-show="symbolShow" color="white">{{ getSymbol }}</v-icon>
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'

import { BaseStyle } from '~/assets/js/screen'
import { Color, COLOR, BTN_SYMBOL } from "~/assets/js/btn"
import { gameSettings } from '~/assets/store/settings'

export default defineComponent({
  props: {
    baseStyle: {
      type: Object as PropType<BaseStyle>,
      required: true,
    },
    color: {
      type: String as PropType<Color>,
      required: true,
      default: 'white',
    },

  },
  setup(props, { emit }) {
    const btnStyle = computed(() => ({
      margin: String(props.baseStyle.margin) + 'px',
    }))
    const size = computed(() => props.baseStyle.height)
    const margin = computed(() => props.baseStyle.margin)

    const clickFunc = () => {
      emit('clickFunc')
    }

    // ======== ボタン記号 ========
    const symbolShow = computed(() => !(props.color === COLOR.WHITE) && gameSettings.showSymbol)
    const getSymbol = computed(() => BTN_SYMBOL[props.color])

    return {
      size, margin, clickFunc, btnStyle, symbolShow, getSymbol
    }
  }
})
</script>

<style module>
.disable-dbl-tap-zoom {
  touch-action: manipulation;
}

.activeBtn {
  color: "white";
}
</style>