import React from 'react';
import styles from './CartItem.module.css';
import Buttons from '../../shared/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';

const CartItem = ({item}) => {
  
  const navigate = useNavigate();

  return (
    <div className={styles.container}>

    <div className={styles.container1} onClick={() => navigate('/'+item.id)}>
    <div className={styles.subImage}>
         <img src={item.image}></img>
    </div>
    <div className={styles.subTitle}>
        <h4>{item.title.length > 20 ? item.title.slice(0,20) + "..." : item.title}</h4>
    </div>
    </div>

    <div className={styles.container2}>
    <div className={styles.subPrice}>
         <h4>&#8377;{item.totalPrice}</h4>
    </div>

    <Buttons item={item}/>
    </div>
 </div>
  );
}

export default CartItem;
