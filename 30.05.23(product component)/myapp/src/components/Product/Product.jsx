import React from 'react'
import s from "./Product.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Product({id,title,description,price,rating,brand,images}) {

  // отображение рейтинга в звездах
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.round(rating)) {
      stars.push(<FontAwesomeIcon icon={faStar} className={s.active} key={i} />);
    } else {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
  }
  
  return (
    <div className={s.product_card}>

    <h2>{title}</h2>

    <h4>Description: {description}</h4>
    <h4>Price: {price}$</h4>
    <h4>Raiting: {stars}</h4>
    <h4>Brand: {brand}</h4>
  
    <img src={images} alt="#" className={s.image}/>
    </div>
  )
}

export default Product