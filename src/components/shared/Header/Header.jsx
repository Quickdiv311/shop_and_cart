import React, { useState } from 'react';
import styles from './Header.module.css';
import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelector, updateSearch } from '../../../store/Reducers/CartReducer';
import { loginSelector, update } from '../../../store/Reducers/loginReducer';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase'; 

const Header = () => {

  const navigate = useNavigate();
  const items = useSelector(itemsSelector);
  const cartItems = items.filter(i => i.added === true);
  const logged = useSelector(loginSelector);
  const dispatch = useDispatch();
  const [hide, setHide] = useState(true);
  const location = useLocation();

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
    signOut(auth)
    .then(res => console.log(res))
    
      dispatch(update(false));
      navigate('/');
  }

  function handleSearch(e)
  {
    window.scrollTo(0,0);
    dispatch(updateSearch(e.target.value.toLowerCase()))
  }


  return (
    <div className={styles.header}>

      <div className={styles.leftBar}>
            <i class="bi bi-shop-window" className={styles.shop} style={{fontSize: "25px",marginLeft: "10px"}}></i>
        <span className={styles.title}>
            <h5 className={styles.appName} onClick={() => navigate('/')}>SHOP&CART</h5>
        </span>
        </div>

        <div className={styles.rightBar}>
        
        {
          location.pathname.includes('/home') && logged &&
          <span className={styles.searchContainer}>
        <span className={styles.searchIcon}><i class="bi bi-search"></i></span>
        <input type="text" onChange={(e) => {handleSearch(e)}}  placeholder="Search.."/>
        </span>}

        {    logged && 
          <span className={styles.cartContainer} onClick={handleCartClick}>
                <span className={styles.num}>{cartItems.length}</span>
                <i class="bi bi-cart" style={{fontSize: "30px"}}></i>
            </span>}
            
            {
               logged &&
              <div className={styles.logged}>    
               <span className={styles.profileContainer}>
                <i class="bi bi-person-fill" style={{fontSize: "25px"}}></i>
               </span>
               <div className={styles.hide}>
               <h6 className={styles.signOut} onClick={handleLogout}>Logout</h6>
               </div>
              </div>
            }
              </div>
        </div>
  );
}

export default Header;
