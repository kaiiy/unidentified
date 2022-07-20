import { InputChar } from "~/assets/js/btn"

// ======== PRIVATE ========

// 動物
const animals = {
    // 蚊 
    mosquito: {
        name: ["か"],
        head: 1,
        leg: 6
    },
    // 鷹, 鷲
    hawkOrEagle: {
        name: ["たか", "わし"],
        head: 1,
        leg: 2
    },
    // 鹿, 獅子
    deerOrLion: {
        name: ["しか", "しし"],
        head: 1,
        leg: 4
    },
    // 案山子 
    scarecrow: {
        name: ["かかし"],
        head: 1,
        leg: 1
    },
    // 私 
    me: {
        name: ["わたし"],
        head: 1,
        leg: 3
    }
}

type CntTarget = {
    headNum: number,
    legNum: number
}

type Animal = typeof animals.mosquito

const addHeadLeg = (cntTarget: CntTarget, animal: Animal): CntTarget => ({
    headNum: cntTarget.headNum + animal.head,
    legNum: cntTarget.legNum + animal.leg
})

// カウント結果 
export type CountResult = {
    headNum: number
    legNum: number
    meNum: number
    downNum: number
    meShow: boolean
}

// 動物カウント 
const countAnimal = (inputChars: string): CountResult => {
    const charsLen = inputChars.length

    // ======== カウント対象 ========
    // 頭, 足の数
    let cntTarget: CntTarget = {
        headNum: 0,
        legNum: 0
    }
    // わたしの数 
    let meNum = 0
    // したの数 
    let downNum = 0
    // かかしが含まれるか 
    let existScarecrow = false

    // ======== カウント ========
    for (let i = 0; i < charsLen; i++) {
        // 1文字 
        if (animals.mosquito.name.includes(inputChars[i]))
            // か 
            cntTarget = addHeadLeg(cntTarget, animals.mosquito)
        // 2文字 
        if (i < charsLen - 1) {
            // 2文字抽出 
            const inputTwo = inputChars.slice(i, i + 2)

            // しか, しし
            if (animals.deerOrLion.name.includes(inputTwo)) {
                cntTarget = addHeadLeg(cntTarget, animals.deerOrLion)
            }
            // たか, わし 
            else if (animals.hawkOrEagle.name.includes(inputTwo))
                cntTarget = addHeadLeg(cntTarget, animals.hawkOrEagle)
            // した 
            else if ('した' === inputTwo)
                downNum++
        }
        // 3文字 
        if (i < charsLen - 2) {
            // 3文字抽出 
            const inputThree = inputChars.slice(i, i + 3)

            // かかし 
            if (animals.scarecrow.name.includes(inputThree)) {
                cntTarget = addHeadLeg(cntTarget, animals.scarecrow)
                existScarecrow = true
            }
            // わたし
            else if (animals.me.name.includes(inputThree)) {
                cntTarget = addHeadLeg(cntTarget, animals.me)
                meNum++
            }
        }
    }

    // わたしを表示するか 
    const meShow = !existScarecrow

    return {
        headNum: cntTarget.headNum,
        legNum: cntTarget.legNum,
        meNum,
        downNum,
        meShow
    }
}

// ======== PUBLIC ========

// 上のカードとアニメーション情報取得 
export const getTopCardAndAnimeInfo = (inputStrArr: readonly InputChar[]) => {
    const inputStr: string = inputStrArr.join("")

    // カードとアニメーション情報 
    const cardAndAnimeInfo: CountResult = countAnimal(inputStr)
    return cardAndAnimeInfo
}

// 下のカードとアニメーション情報取得 
export const getBottomCardAndAnimeInfo = (inputStrArr: readonly InputChar[]) => {
    const inputReversedStr: string = [...inputStrArr].reverse().join("")
    // カードとアニメーション情報 
    const cardAndAnimeInfo: CountResult = countAnimal(inputReversedStr)
    return cardAndAnimeInfo
}