// クリア条件
import { CardNum } from "./numCard"
import { InputChar } from "~/assets/js/btn"
import { ActiveBtnColor, RotateIcon, ROTATE_ICON } from "./final"
import { CHAR2COLOR } from "./btn"

// ======== Main.vue ========
// クリア数字 
const clearTopNum: CardNum = {
    left: 3,
    right: 15
}
const clearBottomNum: CardNum = {
    left: 5,
    right: 20
}

// クリア文字列 
export const CLEAR_STR: readonly InputChar[] = ["か", "し", "わ", "た", "し", "わ", "か"]

const equalCardNum = (cardNum1: CardNum, cardNum2: CardNum): boolean =>
    cardNum1.right === cardNum2.right && cardNum1.left === cardNum2.left


export const isMainClear = (topNum: CardNum, bottomNum: CardNum): boolean => equalCardNum(topNum, clearTopNum) && equalCardNum(bottomNum, clearBottomNum)

// ======== Final.vue ========
const CLEAR_GAME_COLOR: ActiveBtnColor = {
    "arrow_two": CHAR2COLOR["わ"],
    "dot_left": CHAR2COLOR["た"],
    "dot_right": CHAR2COLOR["か"],
    "arrow_left": CHAR2COLOR["わ"],
    "arrow_right": CHAR2COLOR["し"]
} as const

const CLEAR_ARROW2_DEG = 90
const CLEAR_ARROW_LEFT_DEG = 90
const CLEAR_ARROW_RIGHT_DEG = 180

const equalColor = (activeBtnColor: ActiveBtnColor, rotateIcon: RotateIcon): boolean => {
    return activeBtnColor[rotateIcon] === CLEAR_GAME_COLOR[rotateIcon]
}

export const isGameClear = (activeBtnColor: ActiveBtnColor, arrow2Deg: number, arrowLeftDeg: number, arrowRightDeg: number) => {
    // 色 
    const rotateIcons: RotateIcon[] = [ROTATE_ICON.ARROW_TWO, ROTATE_ICON.DOT_LEFT, ROTATE_ICON.DOT_RIGHT, ROTATE_ICON.ARROW_LEFT, ROTATE_ICON.ARROW_RIGHT]
    let isGameClear = true
    for (let i = 0; i < rotateIcons.length; i++) {
        isGameClear &&= equalColor(activeBtnColor, rotateIcons[i])
    }

    // 矢印 
    isGameClear &&= CLEAR_ARROW2_DEG === arrow2Deg
    isGameClear &&= CLEAR_ARROW_LEFT_DEG === arrowLeftDeg
    isGameClear &&= CLEAR_ARROW_RIGHT_DEG === arrowRightDeg

    return isGameClear
} 