<template>
    <v-col
        :class="['text-center', $style['bg-col'], 'py-0']"
        :style="bgStyle"
        cols="12"
        xs="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
    >
        <slot></slot>
    </v-col>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
    props: {
        bgColor: {
            type: String,
            required: true
        }
    }, setup(props) {
        const bgStyle = computed(() => ({
            backgroundColor: props.bgColor,
        }))

        return {
            bgStyle
        }
    }
})
</script>

<style module lang="scss">
@import "~vuetify/src/components/VIcon/_variables.scss";
.bg-col {
    padding: 0;
    height: $icon-size;
    line-height: 100%;
}
</style>