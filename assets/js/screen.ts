import { ref, nextTick } from '@vue/composition-api'

export type BaseStyle = {
    total: number,
    height: number,
    margin: number
}

export type CanvasSize = {
    x: number,
    y: number
}

export type WindowSize = {
    x: number,
    y: number
}

export const getBaseStyle = (canvasSize: CanvasSize): BaseStyle => {
    // totalSize = margin + height + margin 
    const totalSize = canvasSize.x / 7
    return {
        total: totalSize,
        height: totalSize * 0.8,
        margin: totalSize * 0.1
    }
}

export const getWindowSize = (): WindowSize => ({
    x: window.innerWidth,
    y: window.innerHeight,
})

export const getCanvas = (canvasName: string) => document.querySelector<HTMLElement>(`#${canvasName}`)

export const getCanvasSize = (canvas: HTMLElement): CanvasSize => ({ x: canvas.clientWidth, y: canvas.clientHeight })

export const createCanvasSize = () => ref<CanvasSize>({
    x: 0,
    y: 0
})

export const createWindowSize = () => ref<WindowSize>({
    x: 0,
    y: 0
})

// ======== Resize ========
export const awaitResizeBase = async (onResize: () => void) => {
    onResize()
    await nextTick()
    onResize()
}


// ======== NoClickWindow ========
export const getContentStyle = () => {
    const windowSize = getWindowSize()
    return {
        height: String(windowSize.y) + 'px',
        width: String(windowSize.x) + 'px',
    }
}
export const createContentStyle = () => ref(getContentStyle())


