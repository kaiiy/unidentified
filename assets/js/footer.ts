import { CanvasSize } from './screen'
import { headerHeight } from './header'

export const footerHeight = 60

export const getShowFooter = (canvasSize: CanvasSize) => {
    if (canvasSize.y + headerHeight + footerHeight >= window.innerHeight) return false
    else return true
}
