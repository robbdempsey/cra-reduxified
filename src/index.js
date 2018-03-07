import React from 'react'
import registerServiceWorker from './registerServiceWorker'
import { render } from 'react-dom'
import App from './components/app'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { history, default as store } from './store'

import './index.css'

render (
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
