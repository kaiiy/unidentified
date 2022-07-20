<template>
    <!-- Start.vue専用 7ボタン  -->
    <!-- ボタン  -->
    <div :class="$style.btn7Wrap">
        <!-- 7つのボタン -->
        <div :class="$style.btn7Main">
            <Btn v-for="btn in 7" :key="btn" :color="COLOR.WHITE" :base-style="baseStyle" />
        </div>
        <!-- 7つのボタンのクリック禁止  -->
        <div :class="$style.btn7ClickNG" :style="btn7ClickNGStyle"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from '@vue/composition-api'

import Btn from '../btn/Btn.vue'

import { BaseStyle } from '~/assets/js/screen'
import { COLOR } from '~/assets/js/btn'

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

        return {
            btn7ClickNGStyle, COLOR
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