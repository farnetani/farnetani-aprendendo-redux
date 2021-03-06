import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCartRequest } from '../store/modules/cart/actions'
import { IProduct } from '../store/modules/cart/types'

interface CatalogItemProps {
  product: IProduct
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductCartRequest(product))
  }, [dispatch, product])

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span>
      {' - '}
      <button type="button" onClick={handleAddProductToCart}>
        {' '}
        Comprar
      </button>
    </article>
  )
}

export default CatalogItem
