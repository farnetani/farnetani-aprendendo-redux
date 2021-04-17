import { all, takeLatest } from 'redux-saga/effects'

function checkProductStock() {
  console.log('Adicionou ao carrinho')
}

// no primeiro parametro devemos passar a nossa action e no segundo parametro o que será executado
export default all([takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)])
