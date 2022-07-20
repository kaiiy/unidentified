<template>
  <div class="arrowWrap" :style="arrowWrapStyle">
    <component is="style">
      .leftArrow::after {
      position: absolute;
      left: 0;
      top: {{ arrowBottom }};
      border-left: {{ borderRight }} solid #fafafa;
      border-top: {{ borderBottom }} solid #14171A;
      content: "";
      }
      _::-webkit-full-page-media,
      _:future,
      :root .leftArrow::after {
      top: 0;
      }
    </component>
    <span class="leftArrow" :style="arrowStyle"></span>
    <!-- {{ baseStyle }}  -->
    <!-- {{ arrowWidth }}  -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { BaseStyle } from '~/assets/js/screen'

export default defineComponent({
  props: {
    baseStyle: {
      type: Object as PropType<BaseStyle>,
      required: true
    }
  },
  setup(props) {
    const arrowWidth = computed(() => String(props.baseStyle.total / 43) + 'px')
    const arrowBottom = computed(() => String(-props.baseStyle.total / 43) + 'px')
    const borderRight = computed(() => String(props.baseStyle.total / 4) + 'px')
    const borderBottom = computed(() => String(props.baseStyle.total / 9) + 'px')
    const marginBottom = computed(() => String(props.baseStyle.total / 25) + 'px')
    const arrowWrapHeight = computed(() => String(props.baseStyle.total / 6) + 'px')
    const arrowStyle = computed(() => ({
      width: `${props.baseStyle.total * 7 - props.baseStyle.margin * 2}px`,
      left: `${props.baseStyle.margin}px`,
      top: 0,
      borderTop: `${arrowWidth.value} solid #14171A`
    }))
    const arrowWrapStyle = computed(() => ({
      lineHeight: borderRight.value,
      height: arrowWrapHeight.value,
      marginTop: marginBottom.value
    }))
    return { arrowStyle, arrowWidth, borderRight, borderBottom, arrowBottom, arrowWrapStyle }
  }
})
</script>

<style scoped>
.arrowWrap {
  position: relative;
}
.leftArrow {
  display: inline-block;
  position: absolute;
  box-sizing: border-box;
  margin: auto;
}
</style>