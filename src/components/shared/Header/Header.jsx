import React from 'react';
import styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelector } from '../../../store/Reducers/CartReducer';
import { loginSelector, update } from '../../../store/Reducers/loginReducer';

const Header = () => {

  const navigate = useNavigate();
  const items = useSelector(itemsSelector);
  const cartItems = items.filter(i => i.added === true);
  const logged = useSelector(loginSelector);
  const dispatch = useDispatch();

  function handleCartClick()
  {
    if(cartItems.length > 0)
    {
     window.scrollTo(0,0);
     navigate('/cart');
    }
  }

  function handleLogout()
  {
      dispatch(update(false));
      navigate('/');
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
                <span className={styles.num}>{cartItems.length}</span>
                <i class="bi bi-cart" style={{fontSize: "30px"}}></i>
            </span>
            {
               logged &&
              <div className={styles.logged}>
               <h6 className={styles.signOut} onClick={handleLogout}>Logout</h6>
               <span className={styles.profileContainer}>
                <i class="bi bi-person-fill" style={{fontSize: "25px"}}></i>
               </span>
              </div>
            }
              </div>
        </div>
  );
}

export default Header;
