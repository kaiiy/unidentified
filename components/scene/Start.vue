<template>
  <!-- スタート画面  -->
  <Canvas :id="canvasName">
    <NumAndMe :base-style="baseStyle" :num="topCardNum" />

    <RightArrow :base-style="baseStyle" />

    <TheSevenBtn :base-style="baseStyle" />

    <LeftArrow :base-style="baseStyle" />

    <NumAndMe :base-style="baseStyle" :num="bottomCardNum" />

    <Divider />

    <TheStartBtnArea :base-style="baseStyle" @clickStartBtn="goToNextScene(SCENE.START)" />
  </Canvas>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, onBeforeUnmount } from '@vue/composition-api'

import TopMargin from '@/components/screen/TopMargin.vue'
import Canvas from '@/components/screen/Canvas.vue'
import RightArrow from '@/components/specific/arrow/RightArrow.vue'
import LeftArrow from '@/components/specific/arrow/LeftArrow.vue'
import Btn from '@/components/specific/btn/Btn.vue'
import Divider from '@/components/specific/Divider.vue'
import TheStartBtnArea from '~/components/specific/startComponents/TheStartBtnArea.vue'
import NumAndMe from '~/components/specific/NumAndMe.vue'
import TheSevenBtn from '../specific/startComponents/TheSevenBtn.vue'

import { SCENE, Scene } from '~/assets/js/scene'
import { CanvasSize, BaseStyle, createCanvasSize, awaitResizeBase, getCanvasSize, getCanvas } from '~/assets/js/screen'
import { CardNum } from '~/assets/js/numCard'

export default defineComponent({
  components: {
    TopMargin,
    Canvas,
    RightArrow,
    LeftArrow,
    Btn,
    Divider,
    TheStartBtnArea,
    NumAndMe,
    TheSevenBtn
  },
  props: {
    // 次のシーンへ移行
    goToNextScene: {
      type: Function as PropType<(scene: Scene) => void>,
      required: true,
    },
    // キャンバスサイズの更新 
    updateCanvasSize: {
      type: Function as PropType<(canvasSize: CanvasSize) => void>,
      required: true,
    },
    baseStyle: {
      type: Object as PropType<BaseStyle>,
      required: true
    }
  },
  setup(props) {
    const canvasName = 'canvas-start'

    // ======== 描画領域設定 ========
    const canvasSize = createCanvasSize()

    // リサイズ時の更新(横のリサイズのみ) 
    const onResize = () => {
      const canvas = getCanvas(canvasName)
      if (canvas != null) {
        canvasSize.value = getCanvasSize(canvas)
        props.updateCanvasSize(canvasSize.value)
      }
    }
    const awaitResize = async () => {
      await awaitResizeBase(onResize)
    }
    onMounted(() => {
      awaitResize()
      window.addEventListener("resize", awaitResize)
    })
    onBeforeUnmount(() => {
      window.removeEventListener("resize", awaitResize)
    })


    // ======== NumAndMe ========
    // 表示する数字 
    const topCardNum: CardNum = {
      left: 3,
      right: 15
    }
    const bottomCardNum: CardNum = {
      left: 5,
      right: 20
    }

    return {
      SCENE,
      topCardNum,
      bottomCardNum,
      awaitResize,
      canvasName
    }
  }
})
</script>
