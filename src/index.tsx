import React from 'react'
import { render } from 'react-dom'
import { fork } from 'effector'
import { Provider } from 'effector-react/ssr'

import { App } from './app'
import { loadPolyfills } from './polyfills'
import './shared/ui/index.css'

loadPolyfills()

const scope = fork()

render(
  <Provider value={scope}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
