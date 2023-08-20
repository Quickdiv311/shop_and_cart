import React, { useState } from 'react';
import styles from './Product.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, itemsSelector } from '../../../store/Reducers/CartReducer';
import Buttons from '../../shared/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let stars = new Array(Math.floor(product.rating.rate)).fill(1);
  let half = product.rating.rate%1;
  half = half >=0.5 ? 0.5 : 0;  
  

  function handleAddtoCart()
  {
    dispatch(add(product));
  }


  return (
<div className={styles.card}>
     <div className={styles.container}>
     <img className={styles.cardImage} src={product.image} alt="Card image cap" onClick={() => navigate('/'+product.id)}/>
     </div>
     <div className={styles.cardBody}>
     <h5 className={styles.cardTitle}>{product.title.length<20?product.title:product.title.slice(0,20)+"..."}</h5>
     <p className={styles.cardText}>Price: &#8377;{product.price}</p>
     <p className={styles.starText}>
      <span>
      {
        stars.map((i) => (
          <i class="bi bi-star-fill" style={{color:"gold"}}></i>
        ))
      }
      </span>
      <span>
          {
            half>0 && <i class="bi bi-star-half" style={{color:"gold"}}></i>
          }
      </span>
     </p>
    {
       product.added &&
       <Buttons item={product}/>}
    
      {!product.added && <button href="#" className="btn btn-primary" onClick={handleAddtoCart}>Add to Cart</button>}
     </div>
</div>
  );
}

export default Product;
