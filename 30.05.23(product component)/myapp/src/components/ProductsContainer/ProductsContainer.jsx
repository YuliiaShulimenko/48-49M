import React from 'react'
import { products } from '../../data'
import Product from '../Product/Product'
import s from "./ProductsContainer.module.css"


function ProductsContainer({products}) {
  return (
    <div className={s.container}>
   {products.map((elem) => (
          <Product {...elem} key={elem.id} />
        ))}
            </div>
  )
}

export default ProductsContainer

