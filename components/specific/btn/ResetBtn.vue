<template>
    <div :class="$style.btnWrap" :style="btnWrapStyle">
        <v-btn :class="$style.resetBtn" color="#fafafa" @click="resetInputStr()">リセット</v-btn>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'

import { BaseStyle } from '~/assets/js/screen'

export default defineComponent({
    props: {
        baseStyle: {
            type: Object as PropType<BaseStyle>,
            required: true,
        },
        resetInputStr: {
            type: Function as PropType<() => void>,
            required: false,
            default: () => { }
        },

    },
    setup(props) {
        const btnWrapStyle = computed(() => ({
            width: String(props.baseStyle.total * 3) + "px",
            height: String(props.baseStyle.total) + "px"
        }))

        return {
            btnWrapStyle
        }
    }

})
</script>

<style module>
.btnWrap {
    position: relative;
}
.resetBtn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    touch-action: manipulation;
}
</style>