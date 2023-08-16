import React, { useEffect, useState } from 'react';
import styles from './CartItem.module.css';

const CartItem = ({item,update,deleteItem,notify}) => {

  const [quantity, setQuantity] = useState(Number(item.quantity));
  const [price, setPrice] = useState(Math.floor(item.price * 80));

  useEffect(() => {
     setPrice(Math.floor(item.price * 80) * Number(item.quantity));
     setQuantity(Number(item.quantity));
  },[item]);

  function handleQuantityChange(newQuantity)
  {
     setQuantity(newQuantity);
     setPrice(newQuantity * Math.floor(item.price * 80));
     update(item.id, newQuantity);
  }

  function deleteCartItem()
  {
     deleteItem(item.id);
     notify();
  }

  return (
    <div className={styles.container}>

    <div className={styles.container1}>
    <div className={styles.subImage}>
         <img src={item.image}></img>
    </div>
    <div className={styles.subTitle}>
        <h4>{item.title}</h4>
    </div>
    </div>

    <div className={styles.container2}>
    <div className={styles.subPrice}>
         <h4>&#8377; {price}</h4>
    </div>

    <div className={styles.quantity}>
     {
        quantity >1 ? 
      <button className="btn btn-minus" style={{borderRadius: '10px'}}
       onClick={() => handleQuantityChange(quantity-1)}><span style={{color: 'white'}}>-</span></button>
      :
      <button className="btn btn-danger" style={{borderRadius: '10px 0 0 10px'}} onClick={() => deleteCartItem()}>
      <i class="bi bi-trash3-fill" style={{fill: 'black'}}></i>
      </button>
     }
       <button className="btn btn-primary" style={{borderRadius: '0px'}}>{quantity}</button>

       <button className="btn btn-plus" style={{borderRadius: '10px'}}
        onClick={() => handleQuantityChange(quantity+1)}><span style={{color: 'white'}}>+</span></button>
    </div>
    </div>
 </div>
  );
}

export default CartItem;
