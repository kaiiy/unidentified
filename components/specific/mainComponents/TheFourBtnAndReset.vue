<template>
    <div :class="$style['btn4-reset-wrap']">
        <TheFourBtn :base-style="baseStyle" :set-char="setChar" />
        <ResetBtn :base-style="baseStyle" :reset-input-str="resetInputStr" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

import TheFourBtn from "./TheFourBtn.vue";
import ResetBtn from '../btn/ResetBtn.vue';

import { BaseStyle } from '~/assets/js/screen'
import { InputChar } from "~/assets/js/btn"

export default defineComponent({
    components: {
        TheFourBtn,
        ResetBtn
    },
    props: {
        baseStyle: {
            type: Object as PropType<BaseStyle>,
            required: true,
        },
        setChar: {
            type: Function as PropType<(char: InputChar) => void>,
            required: true
        },
        resetInputStr: {
            type: Function as PropType<() => void>,
            required: true,
        },
    },
    // setup() {
    //     return {
    //     }
    // }
})
</script>

<style module>
.btn4-reset-wrap {
    display: flex;
}
</style>
