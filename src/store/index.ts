import { createStore, applyMiddleware } from 'redux'
import { ICartState } from './modules/cart/types'
import rootReducer from './modules/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/rootSaga'

// Tem o formato do nosso State Global = ao tipo: ICartState =  items: ICartItem[]
export interface IState {
  cart: ICartState
}

// Redux-Saga Middleware
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
) //composeWithDevTools() é para ativar o Devtools do redux

sagaMiddleware.run(rootSaga)

export default store
