<template>
  <!-- 丸い白カードにわたし  -->
  <v-card
    :height="circleSize"
    :width="circleSize"
    color="#fafafa"
    :style="{ marginTop: top + 'px', marginLeft: left + 'px' }"
    :class="['align-center', 'py-0', 'rounded-circle', 'card']"
  >
    <v-card-title :id="animationId" class="justify-center my-0 cardTitle" :style="meStyle">わたし</v-card-title>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from '@vue/composition-api'

import { AnimationObjId } from '~/assets/js/animation'

export default defineComponent({
  props: {
    animationId: {
      type: String as PropType<AnimationObjId>,
      required: false,
    },
    circleSize: {
      type: Number,
      required: true,
      default: 0,
    },
    top: {
      type: Number,
      required: false,
      default: 0,
    },
    left: {
      type: Number,
      required: false,
      default: 0,
    },
    animate: {
      type: Function as PropType<(cnt: number) => void>,
      required: false
    }
  },
  setup(props) {
    // ======== スタイル ========
    const meStyle = computed(() => ({
      fontSize: String(Math.max(props.circleSize / 5, Math.min(14, props.circleSize / 3.8))) + 'px',
    }))

    return {
      meStyle,
    }
  },
})
</script>

<style  scoped>
.cardTitle {
  height: 100%;
  line-height: 100%;
  white-space: nowrap;
  user-select: none;
}
</style>