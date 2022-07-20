<template>
    <v-dialog v-model="headerSettings.showPrecaution" max-width="900">
        <v-card>
            <!-- <v-card-title class="text-h4">
                <span :class="$style['no-wrap']">正体不明</span>
            </v-card-title>-->

            <v-img :src="require('@/assets/img/header.png')"></v-img>

            <!-- // ======== 全般 ========  -->
            <v-card-title class="mt-2">
                <v-icon class="mr-2" color="black">mdi-cog</v-icon>注意事項
            </v-card-title>
            <v-card-text class="pb-0">
                <p class="mt-0 mb-0">・ Chrome, Safariなどの主要なブラウザでのプレイをお願いします.</p>
                <p class="mt-2 mb-0">・ ソースコードを見る必要はありません.</p>
                <p class="mt-2 mb-0">・ WEBフォントをブロックしないでください.</p>
                <p class="mt-2 mb-4">・ 拡大率を100%に設定してください.</p>
                <!-- <p>・ スマートフォンなど縦長の端末でプレイする場合, 画面を横にすると遊びやすくなります.</p>  -->
            </v-card-text>

            <!-- // ======== 動作確認 ========  -->
            <v-card-title>
                <v-icon class="mr-2" color="black">mdi-check</v-icon>動作確認
            </v-card-title>

            <v-card-text class="pb-0">
                <p class="mt-0 mb-2">
                    下の「動作確認」ボタンを押して, ■が動くことを確認してください.
                    <br />動いてない場合, ブラウザのバージョンを上げる, 別のブラウザを使用する等の対応をお願いします.
                    <br />これは謎とは関係ありません.
                </p>
                <div :class="[$style['square-animation-wrap']]">
                    <span id="precaution-animation" :class="$style['square-animation']">■</span>
                </div>
                <v-btn @click="moveSquare()" class="ml-4 mb-6 mt-2">動作確認</v-btn>
            </v-card-text>

            <!-- // ======== 色 ========  -->
            <v-card-title>
                <v-icon class="mr-2" color="black">mdi-palette</v-icon>色
            </v-card-title>

            <v-card-text class="pb-0">
                <p class="mt-0 mb-2">プレイには以下の4色を使用しますが, 色の情報は謎とは関係ありません.</p>
                <v-row class="my-4" no-gutters justify="center">
                    <BgCol :bg-color="VEUTIFY_COLOR.RED">
                        <v-icon v-show="gameSettings.showSymbol" color="white">{{ VUETIFY_BTN_SYMBOL[VEUTIFY_COLOR.RED]
                        }}</v-icon>
                    </BgCol>
                    <BgCol :bg-color="VEUTIFY_COLOR.YELLOW">
                        <v-icon v-show="gameSettings.showSymbol" color="white">{{
                                VUETIFY_BTN_SYMBOL[VEUTIFY_COLOR.YELLOW]
                        }}</v-icon>
                    </BgCol>
                    <BgCol :bg-color="VEUTIFY_COLOR.GREEN">
                        <v-icon v-show="gameSettings.showSymbol" color="white">{{
                                VUETIFY_BTN_SYMBOL[VEUTIFY_COLOR.GREEN]
                        }}</v-icon>
                    </BgCol>
                    <BgCol :bg-color="VEUTIFY_COLOR.BLUE">
                        <v-icon v-show="gameSettings.showSymbol" color="white">{{ VUETIFY_BTN_SYMBOL[VEUTIFY_COLOR.BLUE]
                        }}</v-icon>
                    </BgCol>
                </v-row>
                <p class="mt-0 mb-4">
                    色の判別が難しい場合, 次のチェックボックスをONにしてください.
                    <br />色に対応した記号を表示することができます.
                    <br />この機能は謎とは関係ありません.
                </p>
                <v-container fluid class="mb-0 pt-0 pl-4">
                    <v-switch v-model="gameSettings.showSymbol" :label="colorNameModeLabel"></v-switch>
                </v-container>
            </v-card-text>

            <!-- // ======== リスタート ========  -->
            <v-card-title class="mt-0 pt-0">
                <v-icon class="mr-2" color="black">mdi-reload</v-icon>リスタート
            </v-card-title>

            <v-card-text class="pb-0">
                <p class="mt-0 mb-4">
                    最初からプレイする場合,
                    <v-icon color="black" class="mr-1">mdi-reload</v-icon>をクリック/タップしてください. または, スペースキーを押してください.
                </p>
            </v-card-text>

            <!-- // ======== ヒント ========  -->
            <!-- <v-card-title>
                <v-icon class="mr-2" color="black">mdi-lightbulb-on-outline</v-icon>ヒント
            </v-card-title>

            <v-card-text class="pb-0">
                <p class="mt-0 mb-4">
                    <v-icon color="black" class="mr-1">mdi-lightbulb-on-outline</v-icon>をクリック/タップすることでヒントを見ることができます.
                </p>
            </v-card-text>-->

            <!-- // ======== 再表示 ========  -->
            <v-card-title>
                <v-icon class="mr-2" color="black">mdi-help-circle-outline</v-icon>再表示
            </v-card-title>

            <v-card-text class="pb-0">
                <p class="mt-0 mb-10">
                    この注意事項は,
                    <v-icon color="black" class="mr-1">mdi-help-circle-outline</v-icon>をクリック/タップすることで, もう一度見ることができます.
                </p>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="headerSettings.showPrecaution = false">閉じる</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

import { toOnOffStr } from "@/assets/js/precaution"
import BgCol from './precaution/BgCol.vue'
import { gameSettings } from "@/assets/store/settings"
import { headerSettings } from "@/assets/store/header"
import { moveSquare } from '~/assets/js/animation'
import { VUETIFY_BTN_SYMBOL, VEUTIFY_COLOR } from '~/assets/js/btn'

export default defineComponent({
    components: {
        BgCol
    },
    setup() {
        // ======== 色 ========
        // 記号表示モード 
        const colorNameModeLabel = computed(() => `記号表示: ${toOnOffStr(gameSettings.showSymbol)}`)


        return {
            colorNameModeLabel,
            gameSettings, headerSettings, VUETIFY_BTN_SYMBOL, VEUTIFY_COLOR, moveSquare
        }
    },

})
</script>

<style module>
.no-wrap {
    display: inline-block;
    /* インラインブロック化 */
}

.square-animation-wrap {
    width: 100%;
    position: relative;
    height: 1em;
}

.square-animation {
    position: absolute;
    left: 0;
    line-height: 1em;
    font-size: 1em;
}
</style>