import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css';
import CartItem from '../../components/Cart/CartItem/CartItem';
import Header from '../../components/shared/Header/Header';
import AppContext from '../../context';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../store/Reducers/CartReducer';

const Cart = () => {

  const cartItems = useSelector(cartSelector);
  let [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let sum = 0;
    cartItems.forEach(i => sum += Number(i.totalPrice));
    setTotal(sum);

    if(sum == 0) navigate('/'); 

  },[cartItems]);

  return (
    <div className={styles.main}>
      <Header/>
        <div className="list">
        {
            cartItems.map((product) => (
               <CartItem item={product}/>
            ))
          }
        </div>

        <div className={styles.total}>
          <h3 style={{marginRight: '100px'}}>Total: {total}</h3>
        </div>
    </div>
  );
}

export default Cart;
