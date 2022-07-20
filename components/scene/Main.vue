<template>
  <Canvas :id="canvasName">
    <NumAndMe :base-style="baseStyle" :num="topCardNum" :num-show="cardNumShow" :me-show="topMeCircleShow"
      :down-animation-id="topId.down" :me-animation-id="topId.me" />

    <RightArrow :base-style="baseStyle" />

    <TheSevenBtn :base-style="baseStyle" :input-str="inputStr" />

    <LeftArrow :base-style="baseStyle" />

    <NumAndMe :base-style="baseStyle" :num="bottomCardNum" :num-show="cardNumShow" :me-show="bottomMeCircleShow"
      :down-animation-id="bottomId.down" :me-animation-id="bottomId.me" />

    <Divider />

    <TheFourBtnAndReset :base-style="baseStyle" :set-char="setChar" :reset-input-str="resetInputStr" />
  </Canvas>
</template>


<script lang="ts">
import { defineComponent, PropType, ref, onMounted, onBeforeUnmount } from '@vue/composition-api'

import Canvas from "../screen/Canvas.vue";
import NumAndMe from '../specific/NumAndMe.vue';
import RightArrow from '@/components/specific/arrow/RightArrow.vue'
import LeftArrow from '@/components/specific/arrow/LeftArrow.vue'
import TheSevenBtn from '../specific/mainComponents/TheSevenBtn.vue';
import Divider from '@/components/specific/Divider.vue'
import TheFourBtnAndReset from '../specific/mainComponents/TheFourBtnAndReset.vue';
import MeCircleVue from '../specific/card/MeCircle.vue';

import { SCENE, Scene } from '~/assets/js/scene'
import { CanvasSize, BaseStyle, createCanvasSize, awaitResizeBase, getCanvas, getCanvasSize } from '~/assets/js/screen'
import { createCardNum, resetCardNum, setCardNum } from '~/assets/js/numCard';
import { biggerAnimate, createBottomId, createTopId, ANIMATION_OBJ_ID } from "@/assets/js/animation"
import { InputChar } from "~/assets/js/btn"
import { getTopCardAndAnimeInfo, getBottomCardAndAnimeInfo } from '~/assets/js/analyzeInputStr';
import { isMainClear } from "~/assets/js/clear"
import { reload } from '~/assets/store/reload';

export default defineComponent({
  components: {
    Canvas,
    NumAndMe,
    RightArrow,
    LeftArrow,
    MeCircleVue,
    TheSevenBtn,
    Divider,
    TheFourBtnAndReset
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
    const canvasName = "canvas-main"

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
      window.addEventListener("resize", awaitResize)
    })
    onBeforeUnmount(() => {
      window.removeEventListener("resize", awaitResize)
    })

    // ======== NumAndMe ========
    // 表示 
    const cardNumShow = ref(false)
    // 数字 
    const topCardNum = createCardNum()
    const bottomCardNum = createCardNum()
    // わたし表示設定 
    const topMeCircleShow = ref(true)
    const bottomMeCircleShow = ref(true)

    // アニメーション判別のためのID 
    const topId = createTopId()
    const bottomId = createBottomId()

    // ======== TheSevenBtn ========
    // 文字列長さ 
    const inputStrMaxLength = 7
    // 入力した文字列 
    const inputStr = ref<InputChar[]>([])

    // ======== TheFourBtn ========
    // 文字解析 
    const analyzeInputStr = (inputStr: InputChar[]) => {
      const topCardInfo = getTopCardAndAnimeInfo(inputStr)
      const bottomCardInfo = getBottomCardAndAnimeInfo(inputStr)
      // カード数字設定 
      topCardNum.value = setCardNum(topCardInfo)
      // カード数字設定 
      bottomCardNum.value = setCardNum(bottomCardInfo)

      // クリア
      if (!isMainClear(topCardNum.value, bottomCardNum.value)) {
        // わたし表示 
        topMeCircleShow.value = topCardInfo.meShow
        bottomMeCircleShow.value = bottomCardInfo.meShow
        // アニメーション 
        biggerAnimate(topId.down, topCardInfo.downNum)
        biggerAnimate(topId.me, topCardInfo.meNum)
        biggerAnimate(bottomId.down, bottomCardInfo.downNum)
        biggerAnimate(bottomId.me, bottomCardInfo.meNum)
      } else {
        // スペースリロード禁止
        reload.activeSpace = false
        // 次ページへ
        props.goToNextScene(SCENE.MAIN)
      }
    }

    // 入力文字セット 
    const setChar = (char: InputChar) => {
      if (inputStr.value.length < inputStrMaxLength) {
        inputStr.value.push(char)

        if (inputStr.value.length === inputStrMaxLength) {
          // 入力文字列の解析 
          analyzeInputStr(inputStr.value)
          // 数字カードの表示
          cardNumShow.value = true
        }
      }

    }

    // ======== リセット ========
    const resetInputStr = () => {
      // 入力文字削除 
      inputStr.value = []
      // 数字表示false 
      cardNumShow.value = false
      // 数字リセット 
      topCardNum.value = resetCardNum()
      bottomCardNum.value = resetCardNum()
      // わたし表示 
      topMeCircleShow.value = true
      bottomMeCircleShow.value = true
    }

    return {
      SCENE,
      topCardNum,
      bottomCardNum,
      cardNumShow,
      topId,
      bottomId,
      biggerAnimate,
      ANIMATION_OBJ_ID,
      inputStr,
      setChar,
      resetInputStr,
      topMeCircleShow,
      bottomMeCircleShow,
      awaitResize,
      canvasName
    }
  }
})
</script>