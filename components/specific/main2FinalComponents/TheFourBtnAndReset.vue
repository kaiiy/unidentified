<template>
    <div :class="$style['btn4-reset-wrap']">
        <TheFourBtn :base-style="baseStyle" />
        <ResetBtn :base-style="baseStyle" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

import TheFourBtn from '../main2FinalComponents/TheFourBtn.vue';
import ResetBtn from '../btn/ResetBtn.vue';

import { BaseStyle } from '~/assets/js/screen'

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