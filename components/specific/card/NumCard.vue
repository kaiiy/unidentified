<template>
  <v-card
    :height="height"
    :width="width"
    :style="cardWrapStyle"
    class="align-center py-0"
    color="#fafafa"
  >
    <v-card-title class="justify-center my-0 cardTitle" :style="cardTitleStyle">
      <v-icon :id="animationId" class="icon" color="#14171A" :size="iconSize">{{ iconName }}</v-icon>
      <div v-show="numShow" class="dataNum ml-1" :style="numStyle">{{ num }}</div>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'

import { ICON_DIRECTION, IconDirection } from '~/assets/js/numCard'
import { AnimationObjId } from '~/assets/js/animation'

export default defineComponent({
  props: {
    animationId: {
      type: String as PropType<AnimationObjId>,
      required: false,
    },
    num: {
      type: Number,
      required: false,
      default: null,
    },
    height: {
      type: Number,
      required: true,
      default: 0,
    },
    width: {
      type: Number,
      required: true,
      default: 0,
    },
    left: {
      type: Number,
      required: true,
      default: 0,
    },
    direction: {
      type: String as PropType<IconDirection>,
      required: true,
      default: ICON_DIRECTION.UP,
    },
    numShow: {
      type: Boolean,
      required: true,
      default: true,
    },
  }, setup(props) {
    const cardWrapStyle = computed(() => ({
      marginLeft: `${props.left}px`
    }))

    const cardTitleStyle = computed(() => ({
      lineHeight: `${props.height / 3.5}px`
    }))

    const iconSize = computed(() => props.height / 3.5)
    const iconName = computed(() => `mdi-arrow-${props.direction}-bold`)

    const numStyle = computed(() => ({
      fontSize: `${props.height / 3.5}px`,
      color: "#14171A"
    }))

    return {
      cardWrapStyle,
      iconSize,
      iconName,
      numStyle, cardTitleStyle
    }
  }
})
</script>

<style lang="scss" scoped>
.cardTitle {
  height: 100%;
}

.icon {
  white-space: nowrap;
}

.dataNum {
  line-height: 100%;
  user-select: none;
  white-space: nowrap;
}
</style>