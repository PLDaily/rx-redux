import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import { rootEpics, rootReducers } from './modules'
const isPro = false

let middlewares = [
  createEpicMiddleware(rootEpics)
]

if (!isPro) {
  middlewares = [...middlewares, createLogger({ collapsed: true })]
}

export default function configureStore (initialState) {
  const applyedMiddleware = applyMiddleware(...middlewares)

  const store = createStore(
    rootReducers,
    initialState,
    applyedMiddleware
  )

  return store
}
