import { AxiosResponse } from 'axios'
import { all, takeLatest, select, call, put } from 'redux-saga/effects'
import { IState } from '../..'
import api from '../../../services/api'
import {
  addProductCartRequest,
  addProductToCartFailure,
  addProductToCartSuccess
} from './actions'

type CheckProductStockRequest = ReturnType<typeof addProductCartRequest>

interface IStockResponse {
  id: number
  quantity: number
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    ) // ?? = ou retorna 0, seria o mesmo || 0
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const availabeStockRespone: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  )
  if (availabeStockRespone.data.quantity > currentQuantity) {
    console.log('deu certo')
    yield put(addProductToCartSuccess(product))
  } else {
    console.log('falta de estoque')
    yield put(addProductToCartFailure(product.id))
  }
}

// no primeiro parametro devemos passar a nossa action e no segundo parametro o que será executado
export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])
