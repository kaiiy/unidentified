<template>
    <div :class="$style['btn4-wrap']">
        <Btn :base-style="baseStyle" :color="CHAR2COLOR['わ']" />
        <Btn :base-style="baseStyle" :color="CHAR2COLOR['し']" />
        <Btn :base-style="baseStyle" :color="CHAR2COLOR['か']" />
        <Btn :base-style="baseStyle" :color="CHAR2COLOR['た']" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, } from '@vue/composition-api'

import Btn from '../btn/Btn.vue'

import { BaseStyle } from '~/assets/js/screen'
import { CHAR2COLOR } from "~/assets/js/btn"

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
}
</style>