import React from 'react';
import styles from './Header.css';

const Header = () => {
  return (
    <div className="header">

      <div className="left-bar">
            <span className="shop-container">
            <i class="bi bi-shop-window" className={styles.shop} style={{fontSize: "25px"}}></i>
            </span>
        <span className="title">
            <h5>SHOP n CART</h5>
        </span>
        </div>

        <div className="right-bar">
            <span className="cart-container right-barc">
                <span className="num">1</span>
                <i class="bi bi-cart" style={{fontSize: "29px"}}></i>
            </span>
            <span className="profile right-barc">Sign In</span>
            <span className="profile-container">
                <i class="bi bi-person-fill" style={{fontSize: "25px"}}></i>
            </span>
        </div>

    </div>
  );
}

export default Header;
