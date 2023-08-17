import React, { useContext, useEffect, useState } from 'react';
import styles from './CartItem.module.css';
import AppContext from '../../../context';

const CartItem = ({item}) => {

  const {dispatcherEvents} = useContext(AppContext);

  function handleChange(newQuantity)
  {
     item.quantity = newQuantity;
     item.totalPrice = newQuantity * item.price;
     dispatcherEvents("UPDATE_ITEM",item);
  }

  function deleteCartItem()
  {
   dispatcherEvents("DELETE_ITEM",item);
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
         <h4>&#8377; {item.totalPrice}</h4>
    </div>

    <div className={styles.quantity}>
     {
        item.quantity >1 ? 
      <button className="btn btn-minus" style={{borderRadius: '10px'}}
       onClick={() => handleChange(item.quantity-1)}><span style={{color: 'white'}}>-</span></button>
      :
      <button className="btn btn-danger" style={{borderRadius: '10px 0 0 10px'}} onClick={() => deleteCartItem()}>
      <i class="bi bi-trash3-fill" style={{fill: 'black'}}></i>
      </button>
     }
       <button className="btn btn-primary" style={{borderRadius: '0px'}}>{item.quantity}</button>

       <button className="btn btn-plus" style={{borderRadius: '10px'}}
        onClick={() => handleChange(item.quantity+1)}><span style={{color: 'white'}}>+</span></button>
    </div>
    </div>
 </div>
  );
}

export default CartItem;
