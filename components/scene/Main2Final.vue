<template>
    <Canvas :id="canvasName">
        <NumAndMe :class="DISAPPEAR_ANIMATION" :base-style="baseStyle" :num="topCardNum" :down-animation-id="topId.down"
            :me-animation-id="topId.me" />

        <RightArrow :class="DISAPPEAR_ANIMATION" :base-style="baseStyle" />

        <TheSevenBtn :base-style="baseStyle" />

        <LeftArrow :class="DISAPPEAR_ANIMATION" :base-style="baseStyle" />

        <NumAndMe :class="DISAPPEAR_ANIMATION" :base-style="baseStyle" :num="bottomCardNum"
            :down-animation-id="bottomId.down" :me-animation-id="bottomId.me" />

        <Divider :class="DISAPPEAR_ANIMATION" />

        <TheFourBtnAndReset :class="DISAPPEAR_ANIMATION" :base-style="baseStyle" />

        <NoClickWindow />
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
import NumAndMe from '~/components/specific/NumAndMe.vue'
import TheSevenBtn from '../specific/main2FinalComponents/TheSevenBtn.vue'
import TheFourBtnAndReset from '../specific/main2FinalComponents/TheFourBtnAndReset.vue';
import NoClickWindow from '../screen/NoClickWindow.vue'

import { SCENE, Scene } from '~/assets/js/scene'
import { CanvasSize, BaseStyle, createCanvasSize, awaitResizeBase, getCanvasSize, getCanvas } from '~/assets/js/screen'
import { CardNum } from '~/assets/js/numCard'
import { inputAnimation, DISAPPEAR_ANIMATION, disappearAnimation, appearAnimation } from '~/assets/js/main2final'
import { createBottomId, createTopId, sleepMsec } from "@/assets/js/animation"

export default defineComponent({
    components: {
        TopMargin,
        Canvas,
        RightArrow,
        LeftArrow,
        Btn,
        Divider,
        NumAndMe,
        TheSevenBtn,
        TheFourBtnAndReset,
        NoClickWindow
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
        // キャンバス名 
        const canvasName = "canvas-main2final"

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


        onMounted(async () => {
            window.addEventListener("resize", awaitResize)
            //  アニメーション 
            await inputAnimation()
            await sleepMsec(1000)
            await disappearAnimation()
            await appearAnimation()
            // 次ページへ
            props.goToNextScene(SCENE.MAIN2FINAL)
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
        // アニメーション判別のためのID 
        const topId = createTopId()
        const bottomId = createBottomId()

        // ======== 消滅アニメーション ======== 

        return {
            SCENE,
            topCardNum,
            bottomCardNum,
            awaitResize,
            canvasName,
            topId, bottomId,
            DISAPPEAR_ANIMATION
        }
    }
})
</script>
