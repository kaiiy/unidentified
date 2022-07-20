// コンポーネントnumCard関連

import { ref } from '@vue/composition-api'
import { CountResult } from './analyzeInputStr'


// ======== アイコン ========
export const ICON_DIRECTION = {
    UP: "up",
    DOWN: "down"
} as const


// ======== その他 ========
export type IconDirection = typeof ICON_DIRECTION[keyof typeof ICON_DIRECTION]

// 数字 
export type CardNum = {
    left: number,
    right: number
}

// cardNumの作成 
export const createCardNum = () => ref<CardNum>({
    left: 0,
    right: 0
})
// リセット 
export const resetCardNum = (): CardNum => ({
    left: 0,
    right: 0
})
// update 
export const setCardNum = (animalInfo: CountResult): CardNum => ({
    left: animalInfo.headNum,
    right: animalInfo.legNum
})