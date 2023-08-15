import React, { useEffect, useState } from 'react';
import styles from './Product.module.css';

const Product = ({product,notify}) => {

  let stars = [];
  let half = product.rating.rate%1;
  half = half >=0.5 ? 0.5 : 0;  
  for(let i=0;i<Math.floor(product.rating.rate);i++)
  {
    stars[i] = 1;
  }

  function handleAddtoCart()
  {
     let cart = localStorage.getItem("cart");
     let cartItems = [];
     if(cart)
     {
      cartItems = JSON.parse(cart);
     }
     product.quantity = 1;
     cartItems.push(product);
     localStorage.setItem("cart", JSON.stringify(cartItems)); 
     notify();
  }


  return (
<div className={styles.card}>
     <div className={styles.container}>
     <img className={styles.cardImage} src={product.image} alt="Card image cap"/>
     </div>
     <div className={styles.cardBody}>
     <h5 className={styles.cardTitle}>{product.title.length<20?product.title:product.title.slice(0,20)+"..."}</h5>
     <p className={styles.cardText}>Price: &#8377;{Math.floor(product.price*80)}</p>
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
     <button href="#" className="btn btn-primary" onClick={handleAddtoCart}>Add to Cart</button>
     </div>
</div>
  );
}

export default Product;
