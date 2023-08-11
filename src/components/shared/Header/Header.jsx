import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>

      <div className={styles.leftBar}>
            <i class="bi bi-shop-window" className={styles.shop} style={{fontSize: "25px",marginRight: "20px",marginLeft: "10px"}}></i>
        <span className={styles.title}>
            <h5>SHOP&CART</h5>
        </span>
        </div>

        <div className={styles.rightBar}>
            <span className={styles.cartContainer}>
                <span className={styles.num}>1</span>
                <i class="bi bi-cart" style={{fontSize: "30px"}}></i>
            </span>
            <span className={styles.profile}>Sign In</span>
            <span className={styles.profileContainer}>
                <i class="bi bi-person-fill" style={{fontSize: "25px"}}></i>
            </span>
        </div>

    </div>
  );
}

export default Header;
