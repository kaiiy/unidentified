<template>
    <!-- ボタン  -->
    <div :class="$style.btn7Wrap">
        <!-- 7つのボタン -->
        <div :class="$style.btn7Main">
            <!-- <Btn v-for="btn in 7" :key="btn" :color="COLOR.WHITE" :base-style="baseStyle" />  -->
            <Btn :base-style="baseStyle" :color="COLOR.WHITE" :class="$style.hidden"></Btn>

            <!-- 矢印2つ  -->
            <Btn
                :base-style="baseStyle"
                :color="activeBtnColor[ROTATE_ICON.ARROW_TWO]"
                @clickFunc="nextBtn(ROTATE_ICON.ARROW_TWO)"
            ></Btn>

            <!-- ドット  -->
            <Btn
                :base-style="baseStyle"
                :color="activeBtnColor[ROTATE_ICON.DOT_LEFT]"
                @clickFunc="nextBtn(ROTATE_ICON.DOT_LEFT)"
            ></Btn>
            <Btn
                :base-style="baseStyle"
                :color="activeBtnColor[ROTATE_ICON.DOT_RIGHT]"
                :class="[$style.sonantWrap, 'pt-0']"
                @clickFunc="nextBtn(ROTATE_ICON.DOT_RIGHT)"
            ></Btn>
            <div :class="$style.sonant" :style="sonantStyle">〝</div>

            <!-- 矢印 left  -->
            <Btn
                :base-style="baseStyle"
                :color="activeBtnColor[ROTATE_ICON.ARROW_LEFT]"
                @clickFunc="nextBtn(ROTATE_ICON.ARROW_LEFT)"
            ></Btn>
            <!-- 矢印 right  -->
            <Btn
                :base-style="baseStyle"
                :color="activeBtnColor[ROTATE_ICON.ARROW_RIGHT]"
                @clickFunc="nextBtn(ROTATE_ICON.ARROW_RIGHT)"
            ></Btn>

            <Btn :base-style="baseStyle" :color="COLOR.WHITE" :class="$style.hidden"></Btn>
        </div>

        <!-- 矢印  -->
        <div :class="$style['icon-container']" :style="iconContainerStyle">
            <div :class="$style['icon-wrap']" :style="iconWrapStyle"></div>
            <div
                :class="$style['icon-wrap']"
                :style="iconWrapStyle"
                @click="nextIcon(ROTATE_ICON.ARROW_TWO)"
            >
                <div :class="$style.icon" :style="[iconStyle, arrow2RotateStyle]">⇈</div>
            </div>
            <div :class="$style['icon-wrap']" :style="iconWrapStyle">
                <div :class="$style.icon" :style="iconStyle">・</div>
            </div>
            <div :class="$style['icon-wrap']" :style="iconWrapStyle">
                <div :class="$style.icon" :style="iconStyle">・</div>
            </div>
            <div
                :class="$style['icon-wrap']"
                :style="iconWrapStyle"
                @click="nextIcon(ROTATE_ICON.ARROW_LEFT)"
            >
                <div :class="$style.icon" :style="[iconStyle, arrowLeftRotateStyle]">↑</div>
            </div>
            <div
                :class="$style['icon-wrap']"
                :style="iconWrapStyle"
                @click="nextIcon(ROTATE_ICON.ARROW_RIGHT)"
            >
                <div :class="$style.icon" :style="[iconStyle, arrowRightRotateStyle]">↑</div>
            </div>
            <div :class="$style['icon-wrap']" :style="iconWrapStyle"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref, nextTick } from '@vue/composition-api'

import Btn from '../btn/Btn.vue'

import { BaseStyle } from '~/assets/js/screen'
import { COLOR } from '~/assets/js/btn'

import { ROTATE_ICON, RotateIcon, arrowRotateStyle, rotateArrow, getNextBtnColor, createActiveBtnColor } from '~/assets/js/final'

import { isGameClear } from '~/assets/js/clear'

export default defineComponent({
    components: {
        Btn
    },
    props: {
        baseStyle: {
            type: Object as PropType<BaseStyle>,
            required: true,
        },
        gameClear: {
            type: Function as PropType<() => void>,
            required: true,
        }
    },
    setup(props) {
        // ======== アイコン ========
        // 角度 
        const arrow2Deg = ref(0)
        const arrowLeftDeg = ref(0)
        const arrowRightDeg = ref(0)

        // 回転角 
        const arrow2RotateStyle = computed(() => arrowRotateStyle(arrow2Deg.value))
        const arrowLeftRotateStyle = computed(() => arrowRotateStyle(arrowLeftDeg.value))
        const arrowRightRotateStyle = computed(() => arrowRotateStyle(arrowRightDeg.value))

        // スタイル
        const iconContainerStyle = computed(() => ({
            height: String(props.baseStyle.total) + "px",
            width: String(props.baseStyle.total * 7) + "px",
        }))
        const iconWrapStyle = computed(() => ({
            height: String(props.baseStyle.total) + "px",
            width: String(props.baseStyle.total) + "px",
        }))
        const iconStyle = computed(() => ({
            fontSize: String(props.baseStyle.height * 0.4) + "px",
        }))

        // ======== ボタン色 ========
        const activeBtnColor = createActiveBtnColor()

        // ======== ボタン全般 ========
        // クリック処理 (色変更)
        const nextBtn = async (icon: RotateIcon) => {
            // arrow2 
            if (icon === ROTATE_ICON.ARROW_TWO) {
                activeBtnColor[ROTATE_ICON.ARROW_TWO] = getNextBtnColor(activeBtnColor[ROTATE_ICON.ARROW_TWO])
            }
            // arrow_left 
            else if (icon === ROTATE_ICON.ARROW_LEFT) {
                activeBtnColor[ROTATE_ICON.ARROW_LEFT] = getNextBtnColor(activeBtnColor[ROTATE_ICON.ARROW_LEFT])
            }
            // arrow_right 
            else if (icon === ROTATE_ICON.ARROW_RIGHT) {
                activeBtnColor[ROTATE_ICON.ARROW_RIGHT] = getNextBtnColor(activeBtnColor[ROTATE_ICON.ARROW_RIGHT])
            }
            // dot_left 
            else if (icon === ROTATE_ICON.DOT_LEFT) {
                activeBtnColor[ROTATE_ICON.DOT_LEFT] = getNextBtnColor(activeBtnColor[ROTATE_ICON.DOT_LEFT])
            }
            // dot_right
            else if (icon === ROTATE_ICON.DOT_RIGHT) {
                activeBtnColor[ROTATE_ICON.DOT_RIGHT] = getNextBtnColor(activeBtnColor[ROTATE_ICON.DOT_RIGHT])
            }

            await nextTick()

            // ゲームクリア 
            if (isGameClear(activeBtnColor, arrow2Deg.value, arrowLeftDeg.value, arrowRightDeg.value)) props.gameClear()
        }
        // アイコンの回転 
        const nextIcon = async (icon: RotateIcon) => {
            // arrow2 
            if (icon === ROTATE_ICON.ARROW_TWO) {
                arrow2Deg.value = rotateArrow(arrow2Deg.value)
            }
            // arrow_left 
            else if (icon === ROTATE_ICON.ARROW_LEFT) {
                arrowLeftDeg.value = rotateArrow(arrowLeftDeg.value)
            }
            // arrow_right 
            else if (icon === ROTATE_ICON.ARROW_RIGHT) {
                arrowRightDeg.value = rotateArrow(arrowRightDeg.value)
            }

            await nextTick()

            // ゲームクリア 
            if (isGameClear(activeBtnColor, arrow2Deg.value, arrowLeftDeg.value, arrowRightDeg.value)) props.gameClear()
        }

        // ======== 濁点 ========
        // 濁点 
        const sonantStyle = computed(() => ({
            fontSize: String(props.baseStyle.height * 0.4) + "px",
            top: String(props.baseStyle.height * 0.1) + "px",
            right: String(props.baseStyle.height * 3.95) + "px",
        }))

        return {
            COLOR,
            iconStyle, iconWrapStyle,
            sonantStyle,
            arrow2Deg, arrowLeftDeg, arrowRightDeg,
            arrow2RotateStyle, arrowLeftRotateStyle, arrowRightRotateStyle,
            nextBtn, ROTATE_ICON, activeBtnColor, nextIcon, iconContainerStyle
        }
    }
})
</script>

<style module>
.btn7Wrap {
    position: relative;
}

.btn7Main {
    position: relative;
    display: flex;
    z-index: 5;
}

.hidden {
    visibility: hidden;
}

.sonantWrap {
    position: relative;
}
.sonant {
    position: absolute;
    pointer-events: none;
    z-index: 20;
}

/* アイコン  */
.icon-container {
    position: absolute;
    display: flex;
}

.icon-wrap {
    position: relative;
    cursor: pointer;
    touch-action: manipulation;
}

.icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
}
</style>