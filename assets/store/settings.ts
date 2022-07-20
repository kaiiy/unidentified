import { reactive } from '@vue/composition-api'

export const gameSettings = reactive({
    // 色調整する
    useAdjustedColor: false,
    // 記号を表示する
    showSymbol: false
})