import { all, takeLatest, select } from 'redux-saga/effects'
import { IState } from '../..'
import { addProductCartRequest } from './actions'

type CheckProductStockRequest = ReturnType<typeof addProductCartRequest>

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    ) // ?? = ou retorna 0, seria o mesmo || 0
  })
  console.log(currentQuantity)
}

// no primeiro parametro devemos passar a nossa action e no segundo parametro o que será executado
export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])
