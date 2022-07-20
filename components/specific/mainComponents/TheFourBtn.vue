<template>
    <div :class="$style['btn4-wrap']">
        <Btn :base-style="baseStyle" :color="CHAR2COLOR['わ']" @clickFunc="setChar('わ')"></Btn>
        <Btn :base-style="baseStyle" :color="CHAR2COLOR['し']" @clickFunc="setChar('し')"></Btn>
        <Btn :base-style="baseStyle" :color="CHAR2COLOR['か']" @clickFunc="setChar('か')"></Btn>
        <Btn :base-style="baseStyle" :color="CHAR2COLOR['た']" @clickFunc="setChar('た')"></Btn>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, } from '@vue/composition-api'

import Btn from '../btn/Btn.vue'

import { BaseStyle } from '~/assets/js/screen'
import { InputChar, CHAR2COLOR } from "~/assets/js/btn"

export default defineComponent({
    components: {
        Btn
    },
    props: {
        baseStyle: {
            type: Object as PropType<BaseStyle>,
            required: true,
        },
        setChar: {
            type: Function as PropType<(char: InputChar) => void>,
            required: true
        }
    },
    setup() {
        return {
            CHAR2COLOR
        }
    }
})
</script>

<style module>
.btn4-wrap {
    display: flex;
    height: 1rem;
}
</style>