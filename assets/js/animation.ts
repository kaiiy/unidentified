// アニメーション 
export const ANIMATION_OBJ_ID = {
    TOP_ME: "top-me-animation",
    TOP_DOWN: "top-down-animation",
    BOTTOM_ME: "bottom-me-animation",
    BOTTOM_DOWN: "bottom-down-animation",
} as const

export type AnimationObjId = typeof ANIMATION_OBJ_ID[keyof typeof ANIMATION_OBJ_ID]

type AnimationId = {
    me: AnimationObjId,
    down: AnimationObjId
}

export const createTopId = (): AnimationId => ({
    down: ANIMATION_OBJ_ID.TOP_DOWN,
    me: ANIMATION_OBJ_ID.TOP_ME
})

export const createBottomId = (): AnimationId => ({
    down: ANIMATION_OBJ_ID.BOTTOM_DOWN,
    me: ANIMATION_OBJ_ID.BOTTOM_ME
})

export const animationBaseTime = 800

// アニメーション 
export const biggerAnimate = (objId: AnimationObjId, cnt: number) => {
    if (cnt !== 0) {
        // オブジェクトをmeScale倍する 
        const scaleRate = 1.7
        // 時間(msec) 
        const msecDuration = animationBaseTime * cnt

        // 初期化 
        let meKeyFrames = []
        for (let i = 0; i < cnt; i++) {
            meKeyFrames.push({ transform: `scale(1)` })
            meKeyFrames.push({ transform: `scale(${scaleRate})` })
        }
        meKeyFrames.push({ transform: `scale(1)` })

        // アニメーションオブジェクトの定義 
        const animationObj = document.getElementById(objId)?.animate(
            meKeyFrames, {
            duration: msecDuration,
            fill: "forwards",
        })
        animationObj?.pause()

        // 実行 
        animationObj?.play()
    }
}

// スリープ 
export const sleep = (maxCnt: number) => new Promise((resolve) => setTimeout(resolve, maxCnt * animationBaseTime))
export const sleepMsec = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec))

// ======== 確認用アニメーション ========
export const precautionAnimationId = "precaution-animation"
// アニメーション 
export const moveSquare = () => {

    // 初期化 
    let meKeyFrames = [{ left: 0 }, { left: 'calc(100% - 1em)' }]
    // アニメーションオブジェクトの定義 
    const animationObj = document.getElementById(precautionAnimationId)?.animate(
        meKeyFrames, {
        duration: 6000,
        iterations: Infinity,
        direction: "alternate"

    })
    animationObj?.pause()

    // 実行 
    animationObj?.play()
}