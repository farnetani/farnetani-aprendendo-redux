import { createStore } from 'redux'
import { ICartState } from './modules/cart/types'
import rootReducer from './modules/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

// Tem o formato do nosso State Global = ao tipo: ICartState =  items: ICartItem[]
export interface IState {
  cart: ICartState
}
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, composeWithDevTools()) //composeWithDevTools() é para ativar o Devtools do redux

export default store
