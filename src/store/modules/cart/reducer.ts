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

  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART_SUCCESS': {
        const { product } = action.payload

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        )

        // -1 = não encontrado
        if (productInCartIndex >= 0) {
          // adiciono a quantidade
          draft.items[productInCartIndex].quantity++
        } else {
          // Usando a lib immer fica mais fácil de entendermos
          draft.items.push({
            product,
            quantity: 1
          })
        }

        break //porque eu nao tenho o return, jogamos ele pra fora do switch

        // Retorna um novo elemento de state, sobrescreve todos os items, e adicionamos um novo item com o product e a qtde = 1
        // return {
        //   ...state,
        //   items: [...state.items, { product, quantity: 1 }] // Aqui depois da virgula significa que estamos adicionando o novo elemento
        // }
      }
      case 'ADD_PRODUCT_TO_CART_FAILURE': {
        console.log('failure', action.payload)
        break
      }
      default: {
        return draft
      }
    }
  })
}

export default cart
