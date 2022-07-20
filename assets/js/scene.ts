export const SCENE = {
    START: "start",
    MAIN: "main",
    MAIN2FINAL: "main2final",
    FINAL: "final",
    NONE: "none"
} as const

export type Scene = typeof SCENE[keyof typeof SCENE]


// シーンの順番 (順番, シーン)
let SCENE_SETLIST = new Map<Scene, number>([
    [SCENE.START, 0],
    [SCENE.MAIN, 1],
    [SCENE.MAIN2FINAL, 2],
    [SCENE.FINAL, 3]
])

// let SCENE_SETLIST = new Map<Scene, number>([
//     [SCENE.START, 0],
//     [SCENE.MAIN2FINAL, 1],
//     [SCENE.FINAL, 2]
// ])


// 次のシーンを取得 
export const getNextScene = (scene: Scene): Scene => {
    if (!(scene === SCENE.START || scene === SCENE.MAIN || scene === SCENE.MAIN2FINAL)) throw new Error()

    const NON_EXISTING_SCENE_NUM = -1
    const sceneNum = SCENE_SETLIST.get(scene) ?? NON_EXISTING_SCENE_NUM
    if (sceneNum === NON_EXISTING_SCENE_NUM) throw new Error()

    const nextSceneNum = sceneNum + 1

    let nextScene: Scene = SCENE.NONE
    for (const [sc, idx] of SCENE_SETLIST)
        if (idx === nextSceneNum) nextScene = sc
    if (nextScene === SCENE.NONE || nextScene === SCENE.START) throw new Error()

    return nextScene

}

export type ShowScenes = {
    [scene in Scene]: boolean
}

// デコード 
export const getShowScenes = (scene: Scene): ShowScenes => {
    let showScenes: ShowScenes = {
        [SCENE.START]: false,
        [SCENE.MAIN]: false,
        [SCENE.FINAL]: false,
        [SCENE.MAIN2FINAL]: false,
        [SCENE.NONE]: false,
    }

    showScenes[scene] = true

    return showScenes
}
