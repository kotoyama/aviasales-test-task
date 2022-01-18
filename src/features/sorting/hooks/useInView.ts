import { useCallback, useRef } from 'react'
import {
  IntersectionOptions,
  useInView as useInViewObserver,
} from 'react-intersection-observer'

type Params = Partial<Pick<IntersectionOptions, 'threshold'>>

export const useInView = ({ threshold = 0.95 }: Params) => {
  const ref = useRef<HTMLElement>(null)
  const [inViewRef, inView] = useInViewObserver({
    threshold,
  })

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      // @ts-expect-error https://github.com/thebuilder/react-intersection-observer#how-can-i-assign-multiple-refs-to-a-component
      ref.current = node
      inViewRef(node)
    },
    [inViewRef],
  )

  return {
    ref,
    setRef,
    inView,
  }
}
