<template>
    <div class="displayResult">
        <NumCard
            :height="numCardHeight"
            :width="numCardWidth"
            :left="leftNumCardMargin"
            :direction="ICON_DIRECTION.UP"
            :num="num.left"
            :num-show="numShow"
        />
        <NumCard
            :height="numCardHeight"
            :width="numCardWidth"
            :left="rightNumCardMargin"
            :direction="ICON_DIRECTION.DOWN"
            :num="num.right"
            :num-show="numShow"
            :animation-id="downAnimationId"
        />

        <MeCircle
            v-show="meShow"
            :circleSize="circleSize"
            :left="circleLeftMargin"
            :animation-id="meAnimationId"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'

import NumCard from "./card/NumCard.vue";
import MeCircle from './card/MeCircle.vue';

import { BaseStyle } from '~/assets/js/screen'
import { ICON_DIRECTION, CardNum } from '~/assets/js/numCard'
import { ANIMATION_OBJ_ID, AnimationObjId } from "@/assets/js/animation"

export default defineComponent({
    components: {
        NumCard,
        MeCircle
    },
    props: {
        downAnimationId: {
            type: String as PropType<AnimationObjId>,
            required: false,
        },
        meAnimationId: {
            type: String as PropType<AnimationObjId>,
            required: false,
        },
        baseStyle: {
            type: Object as PropType<BaseStyle>,
            required: true,
        },
        num: {
            type: Object as PropType<CardNum>,
            required: true,
            default: () => ({
                left: 0,
                right: 0
            })
        },
        numShow: {
            type: Boolean,
            required: false,
            default: true
        },
        meShow: {
            type: Boolean,
            required: false,
            default: true
        }

    },
    setup(props) {
        // ======== NumCard ========
        const numCardHeight = computed(() => props.baseStyle.height)
        const numCardWidth = computed(() => (props.baseStyle.height + props.baseStyle.margin) * 2)

        const leftNumCardMargin = computed(() => props.baseStyle.height + props.baseStyle.margin * 3)
        const rightNumCardMargin = computed(() => props.baseStyle.margin * 2)

        // ======== MeCircle ========
        const circleSize = computed(() => props.baseStyle.height)
        const circleLeftMargin = computed(() => props.baseStyle.margin * 2)

        return {
            numCardHeight,
            numCardWidth,
            ICON_DIRECTION,
            leftNumCardMargin,
            rightNumCardMargin,
            circleSize,
            circleLeftMargin,
            ANIMATION_OBJ_ID
        }
    }
})
</script>

<style scoped>
.displayResult {
    display: flex;
}
</style>