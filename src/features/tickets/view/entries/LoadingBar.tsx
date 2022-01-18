import React from 'react'
import { styled } from '@linaria/react'
import { useNProgress } from '@tanem/react-nprogress'
import { useStore } from 'effector-react'

import { $loading } from '../../model/private'

type ProgressProps = {
  duration: number
  progress: number
  isFinished: boolean
}

export const LoadingBar: React.FC = () => {
  const isLoading = useStore($loading)
  const { animationDuration, progress, isFinished } = useNProgress({
    isAnimating: isLoading,
  })

  return (
    <Wrap duration={animationDuration} isFinished={isFinished}>
      <InnerWrap duration={animationDuration} progress={progress}>
        <Bar />
      </InnerWrap>
    </Wrap>
  )
}

const Wrap = styled.div<Omit<ProgressProps, 'progress'>>`
  pointer-events: none;
  opacity: ${({ isFinished }) => (isFinished ? 0 : 1)};
  transition: ${({ duration }) => `opacity ${duration}ms linear`};
`

const InnerWrap = styled.div<Omit<ProgressProps, 'isFinished'>>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 3px;
  margin-left: ${({ progress }) => `calc(${(-1 + progress) * 100}%)`};
  background: var(--color-blue);
  transition: ${({ duration }) => `margin-left ${duration}ms linear`};
`

const Bar = styled.div`
  position: absolute;
  right: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 1;
  transform: rotate(3deg) translate(0px, -4px);
`
