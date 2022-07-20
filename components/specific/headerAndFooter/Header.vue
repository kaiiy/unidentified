<template>
    <v-app-bar color="#fafafa" flat outlined fixed>
        <v-spacer></v-spacer>

        <v-btn icon @click="reload()">
            <v-icon color="black">mdi-reload</v-icon>
        </v-btn>
        <!-- ヒント機能  -->
        <v-btn icon @click="headerSettings.showHint = true">
            <v-icon color="black">mdi-lightbulb-on-outline</v-icon>
        </v-btn>
        <v-btn icon @click="headerSettings.showPrecaution = true">
            <v-icon color="black">mdi-help-circle-outline</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

import { headerSettings } from "@/assets/store/header"

export default defineComponent({
    props: {
        reload: {
            type: Function as PropType<() => void>,
            required: true
        }
    },
    setup() {
        return {
            headerSettings
        }
    }
})
</script>