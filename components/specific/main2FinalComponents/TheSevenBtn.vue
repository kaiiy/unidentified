<template>
    <!-- Start.vue専用 7ボタン  -->
    <!-- ボタン  -->
    <div :class="$style.btn7Wrap">
        <!-- 7つのボタン -->
        <div :class="$style.btn7Main">
            <Btn
                :base-style="baseStyle"
                :color="BTN_SETTING[0].color"
                :class="BTN_SETTING[0].display"
            />
            <Btn
                :base-style="baseStyle"
                :color="BTN_SETTING[1].color"
                :class="BTN_SETTING[1].display"
            />
            <Btn
                :base-style="baseStyle"
                :color="BTN_SETTING[2].color"
                :class="BTN_SETTING[2].display"
            />
            <Btn
                :base-style="baseStyle"
                :color="BTN_SETTING[3].color"
                :class="BTN_SETTING[3].display"
            ></Btn>
            <div :class="[$style.sonant, APPEAR_ANIMATION]" :style="sonantStyle">〝</div>
            <Btn
                :base-style="baseStyle"
                :color="BTN_SETTING[4].color"
                :class="BTN_SETTING[4].display"
            />
            <Btn
                :base-style="baseStyle"
                :color="BTN_SETTING[5].color"
                :class="BTN_SETTING[5].display"
            />
            <Btn
                :base-style="baseStyle"
                :color="BTN_SETTING[6].color"
                :class="BTN_SETTING[6].display"
            />
        </div>

        <!-- 7つのボタンのクリック禁止  -->
        <div :class="$style.btn7ClickNG" :style="btn7ClickNGStyle"></div>

        <!-- 矢印  -->
        <div :class="$style['icon-container']" :style="iconContainerStyle">
            <div :class="$style['icon-wrap']" :style="iconWrapStyle"></div>
            <div :class="$style['icon-wrap']" :style="iconWrapStyle">
                <div
                    :class="[$style.icon, APPEAR_ANIMATION]"
                    :style="[iconStyle, arrow2RotateStyle]"
                >⇈</div>
            </div>
            <div :class="$style['icon-wrap']" :style="iconWrapStyle">
                <div :class="[$style.icon, APPEAR_ANIMATION]" :style="iconStyle">・</div>
            </div>
            <div :class="$style['icon-wrap']" :style="iconWrapStyle">
                <div :class="[$style.icon, APPEAR_ANIMATION]" :style="iconStyle">・</div>
            </div>
            <div :class="$style['icon-wrap']" :style="iconWrapStyle">
                <div
                    :class="[$style.icon, APPEAR_ANIMATION]"
                    :style="[iconStyle, arrowLeftRotateStyle]"
                >↑</div>
            </div>
            <div :class="$style['icon-wrap']" :style="iconWrapStyle">
                <div
                    :class="[$style.icon, APPEAR_ANIMATION]"
                    :style="[iconStyle, arrowRightRotateStyle]"
                >↑</div>
            </div>
            <div :class="$style['icon-wrap']" :style="iconWrapStyle"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref } from '@vue/composition-api'

import Btn from '../btn/Btn.vue'

import { BaseStyle } from '~/assets/js/screen'
import { Color, COLOR, CHAR2COLOR } from '~/assets/js/btn'
import { DISAPPEAR_ANIMATION, APPEAR_ANIMATION } from '~/assets/js/main2final'
import { CLEAR_STR } from '~/assets/js/clear'
import { arrowRotateStyle, } from '~/assets/js/final'

export default defineComponent({
    components: {
        Btn
    },
    props: {
        baseStyle: {
            type: Object as PropType<BaseStyle>,
            required: true,
        },
    },
    setup(props) {
        const btn7ClickNGStyle = computed(() => ({
            height: `${props.baseStyle.total}px`,
            width: `${props.baseStyle.total * 7}px`
        }))

        // 入力された色 
        const INPUT_COLOR: Color[] = CLEAR_STR.map((inputChar) => CHAR2COLOR[inputChar])
        // 表示/非表示クラス  
        const DISPLAY = [DISAPPEAR_ANIMATION, "", "", "", "", "", DISAPPEAR_ANIMATION]
        const BTN_SETTING = INPUT_COLOR.map((_, index) => ({
            color: INPUT_COLOR[index],
            display: DISPLAY[index]
        }))

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

        // ======== 濁点 ========
        // 濁点 
        const sonantStyle = computed(() => ({
            fontSize: String(props.baseStyle.height * 0.4) + "px",
            top: String(props.baseStyle.height * 0.1) + "px",
            right: String(props.baseStyle.height * 3.95) + "px",
        }))
        return {
            btn7ClickNGStyle,
            COLOR,
            BTN_SETTING, sonantStyle, arrow2RotateStyle, arrowLeftRotateStyle, arrowRightRotateStyle, iconContainerStyle, iconWrapStyle, iconStyle, APPEAR_ANIMATION
        }
    }
})
</script>


<style  module>
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

.sonant {
    position: absolute;
    opacity: 0;
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
}

.icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    opacity: 0;
}

.btn7ClickNG {
    position: absolute;
    z-index: 6;
    background-color: transparent;
    top: 0;
    left: 0;
}
</style>