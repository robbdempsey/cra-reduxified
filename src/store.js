import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

export const history = createHistory()

const configureStore = (initialState = {}, history) => {
  const middleWares = [
    thunk,
    routerMiddleware(history)
  ]
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleWares))
  )

  return store
}

export default configureStore({}, history)
