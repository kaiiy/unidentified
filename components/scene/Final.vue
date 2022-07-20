<template>
  <!-- スタート画面  -->
  <Canvas :id="canvasName">
    <NumAndMe :base-style="baseStyle" :num="topCardNum" :class="$style.hidden" />

    <RightArrow :base-style="baseStyle" :class="$style.hidden" />

    <TheFiveBtn :base-style="baseStyle" :game-clear="clearGame" />

    <LeftArrow :base-style="baseStyle" :class="$style.hidden" />

    <NumAndMe :base-style="baseStyle" :num="bottomCardNum" :class="$style.hidden" />

    <Divider :class="$style.hidden" />

    <TheStartBtnArea :base-style="baseStyle" :class="$style.hidden" />

    <ClearDialog :reload-window="reloadWindow" />
  </Canvas>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, onBeforeUnmount, ref } from '@vue/composition-api'

import TopMargin from '@/components/screen/TopMargin.vue'
import Canvas from '@/components/screen/Canvas.vue'
import RightArrow from '@/components/specific/arrow/RightArrow.vue'
import LeftArrow from '@/components/specific/arrow/LeftArrow.vue'
import Btn from '@/components/specific/btn/Btn.vue'
import Divider from '@/components/specific/Divider.vue'
import TheStartBtnArea from '~/components/specific/startComponents/TheStartBtnArea.vue'
import NumAndMe from '~/components/specific/NumAndMe.vue'
import TheFiveBtn from '../specific/finalComponents/TheFiveBtn.vue'
import ClearDialog from '../specific/dialog/ClearDialog.vue'

import { SCENE } from '~/assets/js/scene'
import { CanvasSize, BaseStyle, createCanvasSize, awaitResizeBase, getCanvas, getCanvasSize } from '~/assets/js/screen'
import { CardNum } from '~/assets/js/numCard'
import { reload as reloadSettings } from '~/assets/store/reload';
import { clearSettings } from "assets/store/clear"

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
    TheFiveBtn,
    ClearDialog
  },
  props: {
    // キャンバスサイズの更新 
    updateCanvasSize: {
      type: Function as PropType<(canvasSize: CanvasSize) => void>,
      required: true,
    },
    baseStyle: {
      type: Object as PropType<BaseStyle>,
      required: true
    },
    reloadWindow: {
      type: Function as PropType<() => void>,
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
      reloadSettings.activeSpace = true
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

    // ゲームクリア 
    const clearGame = () => {
      clearSettings.showDialog = true
    }

    return {
      SCENE,
      topCardNum,
      bottomCardNum,
      awaitResize,
      canvasName,
      clearGame
    }
  }
})
</script>

<style module>
.hidden {
  visibility: hidden;
}
</style>
