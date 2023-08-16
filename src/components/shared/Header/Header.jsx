import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = ({itemCount,cartItemCount}) => {

  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if(cart)
    {
      let items = JSON.parse(cart);
      setCount(items.length);
    }
  },[itemCount,cartItemCount]);

  function handleCartClick()
  {
    if(count > 0)
    {
     window.scrollTo(0,0);
     navigate('/cart');
    }
  }

  return (
    <div className={styles.header}>

      <div className={styles.leftBar}>
            <i class="bi bi-shop-window" className={styles.shop} style={{fontSize: "25px",marginLeft: "10px"}}></i>
        <span className={styles.title}>
            <h5 onClick={() => navigate('/')}>SHOP&CART</h5>
        </span>
        </div>

        <div className={styles.rightBar}>
            <span className={styles.cartContainer} onClick={handleCartClick}>
                <span className={styles.num}>{count}</span>
                <i class="bi bi-cart" style={{fontSize: "30px"}}></i>
            </span>
            <a className={styles.profile} href='/signin' style={{color: 'white', textDecoration: 'none'}}>Sign In</a>
            <span className={styles.profileContainer}>
                <i class="bi bi-person-fill" style={{fontSize: "25px",position: 'relative', left: '0px'}}></i>
            </span>
        </div>

    </div>
  );
}

export default Header;
