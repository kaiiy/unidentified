<template>
    <v-dialog v-model="headerSettings.showHint" max-width="900">
        <v-card class="pt-3">
            <v-card-title class="text-h4">ヒント</v-card-title>
            <v-card-title class="mr-2">4種類のボタンと出力される数字の関係が</v-card-title>
            <v-card-title>
                <v-icon class="mr-2 hidden-xs-only" color="black">mdi-help</v-icon>「わからない」場合はこちら
            </v-card-title>

            <v-card-text class="px-0">
                <OpenNav :open="showHints.btnAndNumber.ok" :toggle-nav="toggleOkNav"
                    :class="[$vuetify.breakpoint.xs ? 'mx-4' : 'mx-6']" />
                <v-expand-transition>
                    <v-expansion-panels v-show="showHints.btnAndNumber.ok"
                        :class="[$vuetify.breakpoint.xs ? 'px-2' : 'px-4']">
                        <v-expansion-panel>
                            <v-expansion-panel-header>はじめに</v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <p>7回押すことで数字が出力されます。</p>
                                <p>さまざまなパターンを試して法則を推測しましょう。</p>
                                <p>いくつかの法則が絡み合っていますが、そのうちの一部については例えば緑(■)7回、黄(▲)7回による結果がわかりやすいです。</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>続き</v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <p>
                                    「緑(■)」が含まれている分「↑」に1、「↓」に6が加算され、「黄黄(▲▲)」が含まれている分「↑」に1、「↓」に4が加算されます。
                                    <br />このように、7個の四角の中に特定の色の列が含まれるとき決まった数字が加算されています。
                                    <br />数字が加算される色の列は全部で7種類あり、それらはいずれも連続する1～3個の列です。
                                    <br />さまざまなパターンを試し、列と加算される数字との対応をすべて特定させましょう。
                                </p>
                                <p>なお、数字が加算される以外にも出力される動作がありますが、数字の法則を考える段階においてはその動作の意味を考える必要はありません。</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>続き</v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <p>列と数字との対応は以下の通りです。</p>
                                <table>
                                    <tr>
                                        <td>緑(■)</td>
                                        <td>↑1 ↓6</td>
                                    </tr>
                                    <tr>
                                        <td>青緑(★■)</td>
                                        <td>↑1 ↓2</td>
                                    </tr>
                                    <tr>
                                        <td>赤黄(●▲)</td>
                                        <td>↑1 ↓2</td>
                                    </tr>
                                    <tr>
                                        <td>黄緑(▲■)</td>
                                        <td>↑1 ↓4</td>
                                    </tr>
                                    <tr>
                                        <td>黄黄(▲▲)</td>
                                        <td>↑1 ↓4</td>
                                    </tr>
                                    <tr>
                                        <td>緑緑黄(■■▲)</td>
                                        <td>↑1 ↓1</td>
                                    </tr>
                                    <tr>
                                        <td>赤青黄(●★▲)</td>
                                        <td>↑1 ↓3</td>
                                    </tr>
                                </table>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-expand-transition>
            </v-card-text>

            <v-card-title>
                <v-icon class="mr-2 hidden-xs-only" color="black">mdi-exclamation-thick</v-icon>「わかっている」場合はこちら
            </v-card-title>

            <v-card-text class="px-0">
                <OpenNav :open="showHints.btnAndNumber.ng" :toggle-nav="toggleNgNav"
                    :class="[$vuetify.breakpoint.xs ? 'mx-4' : 'mx-6']" />
                <v-expand-transition>
                    <v-expansion-panels v-show="showHints.btnAndNumber.ng"
                        :class="[$vuetify.breakpoint.xs ? 'px-2' : 'px-4']">
                        <v-expansion-panel>
                            <v-expansion-panel-header>はじめに</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>赤(●)、黄(▲)、緑(■)、青(★)にはそれぞれ1つずつ何かが対応します。</p>
                                <p>なお、数字が加算される法則は全部で7つです。 (上のヒント参照)</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>赤(●)、黄(▲)、緑(■)、青(★)に対応するものがわかっていない</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>加算される数は</p>
                                <table>
                                    <tr>
                                        <td>緑(■)</td>
                                        <td>↑1 ↓6</td>
                                    </tr>
                                    <tr>
                                        <td>青緑(★■)</td>
                                        <td>↑1 ↓2</td>
                                    </tr>
                                    <tr>
                                        <td>赤黄(●▲)</td>
                                        <td>↑1 ↓2</td>
                                    </tr>
                                    <tr>
                                        <td>黄緑(▲■)</td>
                                        <td>↑1 ↓4</td>
                                    </tr>
                                    <tr>
                                        <td>黄黄(▲▲)</td>
                                        <td>↑1 ↓4</td>
                                    </tr>
                                    <tr>
                                        <td>緑緑黄(■■▲)</td>
                                        <td>↑1 ↓1</td>
                                    </tr>
                                    <tr>
                                        <td>赤青黄(●★▲)</td>
                                        <td>↑1 ↓3</td>
                                    </tr>
                                </table>
                                <p>でした。</p>
                                <p>一方で、数字が表示される以外の出力も3種類ほど見かけたかと思います。</p>
                                <p>そのうち「『↓』が大きくなる」「『わたし』が大きくなる」の2種類を使い、まずは赤(●)、黄(▲)、青(★)に対応するものを考えましょう。</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>赤(●)、黄(▲)、青(★)に対応するものがわからない</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>黄青(▲★)で「した」、赤青黄(●★▲)で「わたし」が大きくなることから、赤(●)は「わ」、青(★)は「た」、黄(▲)は「し」に対応すると考えられます。</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>緑(■)に対応するものだけわからない (1/2)</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>「わ、た、し」を数字の対応に当てはめると、</p>
                                <table>
                                    <tr>
                                        <td>緑(■)</td>
                                        <td>↑1 ↓6</td>
                                    </tr>
                                    <tr>
                                        <td>た緑(★■)</td>
                                        <td>↑1 ↓2</td>
                                    </tr>
                                    <tr>
                                        <td>わし(●▲)</td>
                                        <td>↑1 ↓2</td>
                                    </tr>
                                    <tr>
                                        <td>し緑(▲■)</td>
                                        <td>↑1 ↓4</td>
                                    </tr>
                                    <tr>
                                        <td>しし(▲▲)</td>
                                        <td>↑1 ↓4</td>
                                    </tr>
                                    <tr>
                                        <td>緑緑し(■■▲)</td>
                                        <td>↑1 ↓1</td>
                                    </tr>
                                    <tr>
                                        <td>わたし(●★▲)</td>
                                        <td>↑1 ↓3</td>
                                    </tr>
                                </table>
                                <p>となります。</p>
                                <p>「わたし」の正体はまだわかりませんが、ワシ、獅子という動物の名前が現れています。ワシが2、獅子が4になるものといえばなんでしょうか。</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>緑(■)に対応するものだけわからない (2/2)</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>「↑」の数字は頭の個数、「↓」の数字は足の本数を表していました。</p>
                                <p>先ほどの対応を成立させるには、緑(■)が「か」であればよいとわかります。</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>赤(●)、黄(▲)、緑(■)、青(★)に対応するものがわかっている</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <table>
                                    <tr>
                                        <td>か(■)</td>
                                        <td>↑1 ↓6</td>
                                    </tr>
                                    <tr>
                                        <td>たか(★■)</td>
                                        <td>↑1 ↓2</td>
                                    </tr>
                                    <tr>
                                        <td>わし(●▲)</td>
                                        <td>↑1 ↓2</td>
                                    </tr>
                                    <tr>
                                        <td>しか(▲■)</td>
                                        <td>↑1 ↓4</td>
                                    </tr>
                                    <tr>
                                        <td>しし(▲▲)</td>
                                        <td>↑1 ↓4</td>
                                    </tr>
                                    <tr>
                                        <td>かかし(■■▲)</td>
                                        <td>↑1 ↓1</td>
                                    </tr>
                                    <tr>
                                        <td>わたし(●★▲)</td>
                                        <td>↑1 ↓3</td>
                                    </tr>
                                </table>
                                <p>
                                    というように、それぞれの頭と足の数が加算されていました。
                                    <br />これを使い、スタート画面にある数字「↑3 ↓15」「↑5 ↓20」が出力されるような文字列を探しましょう。
                                </p>
                                <p>3つで足の本数が奇数 (15) となっていることが手がかりになります。</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>スタート画面の数字が出力できていない (1/2)</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>
                                    3つで足が15本になるということは、「かかし」か「わたし」が1体含まれます。
                                    <br />ただし、「かかし」が含まれる場合残りの2つで足が14本になる組み合わせがないので、「わたし」が含まれることになります。
                                    <br />ここから残りの2つは足の合計本数が12となりますが、これは6本足の「か」2匹であると特定できます。
                                    <br />以上から、正順に読んだときに「わたし」1個と「か」2個があり、ほかの5種類の文字列は存在しないということがわかります。
                                </p>
                                <p>
                                    また、「か」「しし」については逆から読んでも同じなので、逆順に読んだときにも「か」は2個、「しし」は0個とわかります。
                                    <br />正順で「しか」がないので逆順には「かかし」がないこともわかります。
                                    <br />つまり、逆順だと「か」「しし」「かかし」以外の4種類の文字列は合計で3つあり、それらの足の合計本数は8本となります。
                                </p>
                                <p>残り3つとしてありえるものを絞り、その中から7個の四角から生成できるものを見つけましょう。</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>スタート画面の数字が出力できていない (2/2)</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>(求めるべき文字列だけ知りたい方は、最後の一文以外読み飛ばしてかまいません。)</p>
                                <p>
                                    残り3つの足の本数の組み合わせは、
                                    <br />&ensp;(2, 2, 4) または (2, 3, 3)
                                    <br />ですが、残りで「わたし」が2つ入ることは文字数の制約上ありえないので、前者となります。
                                    <br />4本足のものは「しか」と確定しますが、2本足のものは「たか」「わし」のいずれかになります。
                                    <br />残り2つで場合分けすると以下のようになります。
                                </p>
                                <p>
                                    <strong>(A) たか、たか</strong>
                                    <br />逆順で考えたとき、「しか」「たか」「たか」の3つに含まれる「か」は独立であるため、「か」が3つ以上あることになり矛盾する。
                                </p>
                                <p>
                                    <strong>(B) たか、わし</strong>
                                    <br />正順で考えたとき、「わたし」「かし」「かた」「しわ」が含まれることになる。
                                    <br />入力する文字列は7文字なので、この4つの文字列の中で少なくとも2文字は共通でなければならない。
                                    <br />そのためには「かし」「しわ」「わたし」をこの順で繋げる、つまり「かしわたし」とする必要がある。
                                    <br />よって7文字の列は「かしわたし-かた」または「かた-かしわたし」となるが、それぞれ「しか」「たか」という新たな文字列が生成されてしまうので不適当である。
                                </p>
                                <p>
                                    <strong>(C) わし、わし</strong>
                                    <br />正順で考えたとき、「わたし」「かし」1つずつ、「しわ」2つ、かしとは別の「か」1つが含まれることになる。
                                    <br />「わたし」「かし」「しわ」「しわ」は6文字のうちに納めなければならないので、少なくとも3文字は共通でなければならない。
                                    <br />そのためには「かしわたしわ」である必要がある。
                                    <br />よって7文字の列は「かしわたしわ-か」または「か-かしわたしわ」となるが、後者は「かかし」が生成されてしまうので前者が求めるべきものである。
                                </p>
                                <p>よって、「かしわたしわか」 (緑黄赤青黄赤緑; ■▲●★▲●■) と入力するとスタート画面の数字が出力されます。</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>スタート画面の数字が出力できた (1/2)</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>画面が次のフェーズに移行したかと思います。</p>
                                <p>
                                    四角はタップで色が変わり、矢印はタップで向きが変わります。
                                    <br />ここで問題ページのタイトルにある「わたしは何者？」の答えを提示できればクリアとなります。
                                </p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>スタート画面の数字が出力できた (2/2)</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>「わたし」の足が3本であること、「かかし」で「わたし」が消えることから、「わたし」はヤタガラス (または三足烏) だと特定できます。</p>
                                <p>矢印は五十音表上で仮名をずらすことを表しており、「わたがわし」 (赤青緑赤黄; ●★■●▲) と「⇉・・→↓」でクリアとなります。</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-expand-transition>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="headerSettings.showHint = false">閉じる</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

import { headerSettings } from "@/assets/store/header"
import OpenNav from './hintComponents/OpenNav.vue'


export default defineComponent({
    components: {
        OpenNav
    },
    setup() {
        const showHints = reactive({
            btnAndNumber: {
                ok: false,
                ng: false
            }
        })

        const toggleOkNav = () => {
            showHints.btnAndNumber.ok = !showHints.btnAndNumber.ok
        }
        const toggleNgNav = () => {
            showHints.btnAndNumber.ng = !showHints.btnAndNumber.ng
        }
        return {
            headerSettings, showHints, toggleOkNav, toggleNgNav
        }
    },

})
</script>

<style module>
.no-wrap {
    display: inline-block;
    /* インラインブロック化 */
}

.no-wrap {
    display: inline-block;
    /* インラインブロック化 */
}
