import { Reducer } from 'redux'
import produce from 'immer'
import { ICartState } from './types'

const INITIAL_STATE: ICartState = {
  items: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  // console.log(state, action)
  // return {
  //   items: []
  // }

  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload

      // Usando a lib immer fica mais fácil de entendermos
      return produce(state, (draft) => {
        draft.items.push({
          product,
          quantity: 1
        })
      })

      // Retorna um novo elemento de state, sobrescreve todos os items, e adicionamos um novo item com o product e a qtde = 1
      // return {
      //   ...state,
      //   items: [...state.items, { product, quantity: 1 }] // Aqui depois da virgula significa que estamos adicionando o novo elemento
      // }
    }
    default: {
      return state
    }
  }
}

export default cart
