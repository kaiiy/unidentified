import { reactive } from '@vue/composition-api'

import { COLOR, Color, CHAR2COLOR } from "./btn"

import { CLEAR_STR } from './clear'

// ======== アイコン ========
export const ROTATE_ICON = {
    ARROW_TWO: "arrow_two",
    ARROW_LEFT: "arrow_left",
    ARROW_RIGHT: "arrow_right",
    DOT_LEFT: "dot_left",
    DOT_RIGHT: "dot_right",
} as const

export type RotateIcon = typeof ROTATE_ICON[keyof typeof ROTATE_ICON]

export const arrowRotateStyle = (deg: number) => ({
    transform: `translate(-50%, -50%) rotate(${deg}deg)`
})

export const rotateArrow = (deg: number) => {
    const rotateDeg = 90
    return (deg + rotateDeg) % 360
}

// ======== ボタン色 ======== 
// ボタン色の順番 
const COLOR_ORDER: Color[] = [
    COLOR.RED, COLOR.YELLOW, COLOR.GREEN, COLOR.BLUE,
]

// 次のボタン色の取得 
export const getNextBtnColor = (currentColor: Color): Color => {
    const currentIndex = COLOR_ORDER.findIndex((element) => element === currentColor)
    const nextColor = COLOR_ORDER[(currentIndex + 1) % COLOR_ORDER.length]
    return nextColor
}

// 押せるボタンの色 
export type ActiveBtnColor = Record<RotateIcon, Color>

export const createActiveBtnColor = () => reactive<ActiveBtnColor>({
    [ROTATE_ICON.ARROW_TWO]: CHAR2COLOR[CLEAR_STR[1]],
    [ROTATE_ICON.DOT_LEFT]: CHAR2COLOR[CLEAR_STR[2]],
    [ROTATE_ICON.DOT_RIGHT]: CHAR2COLOR[CLEAR_STR[3]],
    [ROTATE_ICON.ARROW_LEFT]: CHAR2COLOR[CLEAR_STR[4]],
    [ROTATE_ICON.ARROW_RIGHT]: CHAR2COLOR[CLEAR_STR[5]]
})