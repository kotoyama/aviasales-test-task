import React from 'react'
import { useStore } from 'effector-react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { $loading } from '../../model/private'

NProgress.configure({ showSpinner: false })

export const LoadingBar: React.FC = () => {
  const loading = useStore($loading)

  React.useEffect(() => {
    if (loading) {
      NProgress.start()
    } else {
      NProgress.done()
    }
    return () => NProgress.remove()
  }, [loading])

  return null
}
