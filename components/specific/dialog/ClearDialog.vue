<template>
    <v-dialog v-model="clearSettings.showDialog" persistent max-width="900">
        <v-card>
            <ClearSvg />
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="submit-btn" color="primary" text @click="go2start()">スタート画面に戻る</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>


<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

import ClearSvg from './ClearSvg.vue';
import { clearSettings } from "assets/store/clear"

import { AES, enc } from "crypto-js"

export default defineComponent({
    components: {
        ClearSvg
    },
    props: {
        reloadWindow: {
            type: Function as PropType<() => void>,
            required: true
        }
    },
    setup(props) {
        const randomText = AES.decrypt("U2FsdGVkX1/GfXlnHwhj1Ooty/V5ZAy/9YdCzXAchXPxfbosyRKQSis6JBteKFFVoRtkLNjapHS9He61UYTG6w==", "MeaninglessStr").toString(enc.Utf8)

        const go2start = () => {
            clearSettings.showDialog = false
            props.reloadWindow()
        }


        return {
            go2start, randomText, clearSettings
        }
    }
})
</script>