import React from 'react';
import styles from './Product.module.css';

const Product = ({product}) => {
  return (
<div className={styles.card}>
     <div className={styles.container}>
     <img className={styles.cardImage} src={product.image} alt="Card image cap"/>
     </div>
     <div className={styles.cardBody}>
     <h5 className={styles.cardTitle}>{product.title.length<20?product.title:product.title.slice(0,20)+"..."}</h5>
     <p className={styles.cardText}>Price: {product.price}</p>
     <a href="#" className="btn btn-primary">Add to Cart</a>
     </div>
</div>
  );
}

export default Product;
