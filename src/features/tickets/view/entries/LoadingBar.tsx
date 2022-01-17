import React from 'react'
import { useNProgress } from '@tanem/react-nprogress'
import { useStore } from 'effector-react'

import { Progressbar } from '~/ui'

import { $loading } from '../../model/private'

export const LoadingBar: React.FC = () => {
  const isLoading = useStore($loading)
  const { animationDuration, progress, isFinished } = useNProgress({
    isAnimating: isLoading,
  })

  return (
    <Progressbar
      progress={progress}
      isFinished={isFinished}
      duration={animationDuration}
    />
  )
}
