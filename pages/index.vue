<template>
  <div>
    <Header :reload="reloadWindow" />
    <Precaution />
    <HintDialog />

    <Window :canvas-size="canvasSize">
      <Start v-if="showScenes[SCENE.START]" :base-style="baseStyle" :go-to-next-scene="goToNextScene"
        :update-canvas-size="updateCanvasSize" />
      <Main v-if="showScenes[SCENE.MAIN]" :base-style="baseStyle" :go-to-next-scene="goToNextScene"
        :update-canvas-size="updateCanvasSize" />
      <Main2Final v-if="showScenes[SCENE.MAIN2FINAL]" :base-style="baseStyle" :go-to-next-scene="goToNextScene"
        :update-canvas-size="updateCanvasSize" />
      <Final v-if="showScenes[SCENE.FINAL]" :base-style="baseStyle" :update-canvas-size="updateCanvasSize"
        :reload-window="reloadWindow" />
    </Window>

    <Footer v-show="showFooter" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeMount, } from '@vue/composition-api'

import Header from '~/components/specific/headerAndFooter/Header.vue'
import Precaution from '~/components/specific/dialog/Precaution.vue'
import Start from '@/components/scene/Start.vue'
import Main from '~/components/scene/Main.vue'
import Final from '@/components/scene/Final.vue'
import Window from '~/components/screen/Window.vue'
import Footer from '~/components/specific/headerAndFooter/Footer.vue'
import Main2Final from '~/components/scene/Main2Final.vue'
import HintDialog from '~/components/specific/dialog/HintDialog.vue'

import { CanvasSize, BaseStyle, getBaseStyle, createCanvasSize } from '~/assets/js/screen'
import { getShowFooter } from "@/assets/js/footer"
import {
  SCENE,
  Scene,
  getNextScene,
  getShowScenes,
  ShowScenes,
} from '~/assets/js/scene'
import { isSpaceKey } from '~/assets/js/reload'
import { reload } from '~/assets/store/reload'

export default defineComponent({
  components: {
    Header,
    Precaution,
    Start,
    Main,
    Final,
    Window,
    Footer,
    Main2Final, HintDialog
  },
  setup() {
    // ======== シーン設定 ========
    // ビルド前にSCENE.STARTに設定(後)
    const currentScene = ref<Scene>(SCENE.START)

    // 各シーンの表示設定
    const showScenes = ref<ShowScenes>(getShowScenes(currentScene.value))

    // 次のシーンへ移行
    const goToNextScene = (scene: Scene): void => {
      // 現在のシーンの更新
      currentScene.value = getNextScene(scene)
      // 表示設定の更新
      showScenes.value = getShowScenes(currentScene.value)
    }

    // ======== 描画サイズ設定 ========
    const canvasSize = createCanvasSize()

    // 描画領域サイズの更新 
    const updateCanvasSize = (newCanvasSize: CanvasSize): void => {
      canvasSize.value = newCanvasSize
    }

    // ======== コンポーネントの基準サイズ ========
    const baseStyle = computed<BaseStyle>(() => getBaseStyle(canvasSize.value))

    // ======== リロード ========
    const reloadWindow = () => {
      currentScene.value = SCENE.START
      showScenes.value = getShowScenes(currentScene.value)
    }
    const keyPressedEvent = (ev: KeyboardEvent) => {
      if (isSpaceKey(ev) && reload.activeSpace) reloadWindow()
    }

    // ======== フッター ========
    // 表示/非表示 
    const showFooter = computed(() => getShowFooter(canvasSize.value))

    // ======== ライフサイクル ========
    onMounted(() => {
      // リロード用 
      document.addEventListener('keypress', keyPressedEvent);
    })
    onBeforeMount(() => {
      // リロード用 
      document.removeEventListener('keypress', keyPressedEvent);
    })

    return {
      showScenes, reloadWindow,
      SCENE,
      goToNextScene,
      canvasSize,
      updateCanvasSize,
      baseStyle, showFooter
    }
  }
})
</script>
