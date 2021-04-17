import { createStore } from 'redux'
import { ICartState } from './modules/cart/types'
import rootReducer from './modules/rootReducer'

// Tem o formato do nosso State Global = ao tipo: ICartState =  items: ICartItem[]
export interface IState {
  cart: ICartState
}

const store = createStore(rootReducer)

export default store
