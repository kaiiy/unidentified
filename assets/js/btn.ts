import colors from 'vuetify/lib/util/colors'

// デフォルト色 
export const COLOR = {
    WHITE: "#fafafa",
    RED: "red",
    BLUE: "blue",
    GREEN: "green",
    YELLOW: "yellow"
} as const

export type Color = typeof COLOR[keyof typeof COLOR]

// 入力可能な文字 
export const CHAR2COLOR = {
    "わ": COLOR.RED,
    "た": COLOR.BLUE,
    "か": COLOR.GREEN,
    "し": COLOR.YELLOW
} as const

export type InputChar = keyof typeof CHAR2COLOR

export const VEUTIFY_COLOR = {
    WHITE: colors.shades.white,
    RED: colors.red.base,
    BLUE: colors.blue.base,
    GREEN: colors.green.base,
    YELLOW: colors.yellow.base
} as const

export type VeutifyColor = typeof VEUTIFY_COLOR[keyof typeof VEUTIFY_COLOR]

export const ADJUSTED_COLOR = {
    WHITE: "#ffffff",
    RED: "#ff4b00",
    BLUE: "#005aff",
    GREEN: "#03af7a",
    YELLOW: "#fff100"
} as const

export type ColorKey = keyof typeof ADJUSTED_COLOR

export type ColorObj = Record<ColorKey, string>

// ボタンと記号 
export type BtnSymbol = Record<Color, string>
export const BTN_SYMBOL: BtnSymbol = {
    [COLOR.WHITE]: "",
    [COLOR.RED]: "mdi-circle",
    [COLOR.YELLOW]: "mdi-triangle",
    [COLOR.GREEN]: "mdi-square",
    [COLOR.BLUE]: "mdi-star",
}

export type VuetifyBtnSymbol = Record<VeutifyColor, string>
export const VUETIFY_BTN_SYMBOL: VuetifyBtnSymbol = {
    [VEUTIFY_COLOR.WHITE]: "",
    [VEUTIFY_COLOR.RED]: "mdi-circle",
    [VEUTIFY_COLOR.YELLOW]: "mdi-triangle",
    [VEUTIFY_COLOR.GREEN]: "mdi-square",
    [VEUTIFY_COLOR.BLUE]: "mdi-star",
}