import { sleep, sleepMsec } from "./animation"
import { biggerAnimate, createBottomId, createTopId } from "@/assets/js/animation"
import { getBottomCardAndAnimeInfo, getTopCardAndAnimeInfo } from './analyzeInputStr'

import { CLEAR_STR } from "./clear"


// ======== 入力アニメーション ========
export const inputAnimation = async () => {
    // アニメーション判別のためのID 
    const topId = createTopId()
    const bottomId = createBottomId()

    const topCardInfo = getTopCardAndAnimeInfo(CLEAR_STR)
    const bottomCardInfo = getBottomCardAndAnimeInfo(CLEAR_STR)

    biggerAnimate(topId.down, topCardInfo.downNum)
    biggerAnimate(topId.me, topCardInfo.meNum)
    biggerAnimate(bottomId.down, bottomCardInfo.downNum)
    biggerAnimate(bottomId.me, bottomCardInfo.meNum)


    await sleep(Math.max(topCardInfo.downNum, topCardInfo.meNum, bottomCardInfo.downNum, bottomCardInfo.meNum))
}

// ======== 消滅アニメーション ======== 
// 消滅クラス名 
export const DISAPPEAR_ANIMATION = "disappear-animation"

export const disappearAnimation = async () => {
    // 時間(msec) 
    const msecDuration = 3000

    // 初期化 
    let meKeyFrames = [{ opacity: 1 }, { opacity: 0 }]

    // アニメーションオブジェクトの定義 
    const animationClassList = document.getElementsByClassName(DISAPPEAR_ANIMATION) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < animationClassList.length; i++) {
        const animationObj = animationClassList[i].animate(
            meKeyFrames, {
            duration: msecDuration,
            easing: "ease-out",
            fill: "forwards",
        })
        animationObj?.pause()

        // 実行 
        animationObj?.play()
    }

    await sleepMsec(msecDuration)
}

// ======== 登場アニメーション ======== 
export const APPEAR_ANIMATION = "appear-animation"

export const appearAnimation = async () => {
    // 時間(msec) 
    const msecDuration = 1000

    // 初期化 
    let meKeyFrames = [{ opacity: 0 }, { opacity: 1 }]

    // アニメーションオブジェクトの定義 
    const animationClassList = document.getElementsByClassName(APPEAR_ANIMATION) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < animationClassList.length; i++) {
        const animationObj = animationClassList[i].animate(
            meKeyFrames, {
            duration: msecDuration,
            easing: "ease-in",
            fill: "forwards",
        })
        animationObj?.pause()

        // 実行 
        animationObj?.play()
    }

    await sleepMsec(msecDuration)
}