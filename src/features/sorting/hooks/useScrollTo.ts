import { RefObject } from 'react'

type Params = {
  containerRef: RefObject<HTMLElement>
  stickLeft?: boolean
  baseOffset?: number
}

type ScrollParams = {
  element: HTMLElement | Element
  invertStickLeft?: boolean
} & ScrollOptions

export const useScrollTo =
  ({
    containerRef,
    stickLeft: stickLeftOriginal = true,
    baseOffset: baseOffsetOriginal = 0,
  }: Params) =>
  ({ element, behavior = 'smooth', invertStickLeft = false }: ScrollParams) => {
    const { current: container } = containerRef

    if (!container) {
      return
    }

    const { width: containerWidth, x: containerX } =
      container.getClientRects()[0]
    const { width: elementWidth, x: elementX } = element.getClientRects()[0]

    const stickLeft = invertStickLeft ? !stickLeftOriginal : stickLeftOriginal

    const offset = stickLeft
      ? elementX - containerX
      : -(containerWidth - (elementX - containerX) - elementWidth)
    const baseOffset = stickLeft ? -baseOffsetOriginal : baseOffsetOriginal

    container.scrollTo({
      left: container.scrollLeft + offset + baseOffset,
      behavior,
    })
  }

export type ScrollToResult = ReturnType<typeof useScrollTo>
