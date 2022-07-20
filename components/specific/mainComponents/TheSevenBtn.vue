<template>
    <!-- Start.vue専用 7ボタン  -->
    <!-- ボタン  -->
    <div :class="$style.btn7Wrap">
        <!-- 7つのボタン -->
        <div :class="$style.btn7Main">
            <Btn
                v-for="(btnColor, index) in btnColors"
                :key="index"
                :color="btnColor"
                :base-style="baseStyle"
            />
        </div>
        <!-- 7つのボタンのクリック禁止  -->
        <div :class="$style.btn7ClickNG" :style="btn7ClickNGStyle"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, } from '@vue/composition-api'

import Btn from '../btn/Btn.vue'

import { BaseStyle } from '~/assets/js/screen'
import { COLOR, Color, CHAR2COLOR, InputChar } from "~/assets/js/btn"

export default defineComponent({
    components: {
        Btn
    },
    props: {
        baseStyle: {
            type: Object as PropType<BaseStyle>,
            required: true,
        },
        inputStr: {
            type: Array as PropType<InputChar[]>,
            required: true,
            validator: (v: string) => (v.length <= 7)
        }
    },
    setup(props) {
        // ======== スタイル ========
        const btn7ClickNGStyle = computed(() => ({
            height: `${props.baseStyle.total}px`,
            width: `${props.baseStyle.total * 7}px`
        }))

        // ======== 動作部分 ========
        // ボタン数 
        const btnNum = 7
        // ボタン色 
        const btnColors = computed(() => {
            // 入力した文字列をもとにボタン色を決定 
            let colors = new Array<Color>(btnNum).fill(COLOR.WHITE)
            for (let i = 0; i < props.inputStr.length; i++)
                colors[i] = CHAR2COLOR[props.inputStr[i]]

            return colors
        })


        return {
            btn7ClickNGStyle,
            btnColors
        }
    }
})
</script>


<style module>
.btn7Wrap {
    position: relative;
}

.btn7Main {
    display: flex;
    z-index: 5;
}
.btn7ClickNG {
    position: absolute;
    z-index: 6;
    background-color: transparent;
    top: 0;
    left: 0;
}
</style>