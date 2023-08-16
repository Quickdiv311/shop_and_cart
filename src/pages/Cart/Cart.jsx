import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css';
import CartItem from '../../components/Cart/CartItem/CartItem';
import Header from '../../components/shared/Header/Header';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const navigate = useNavigate();
  
   useEffect(() => {
        let cart = localStorage.getItem("cart");
         if(cart)
         {
          let items = JSON.parse(cart);
          updateTotal(items);
          setCartItems(items);
         }
   },[]);

  function updateItemQuantity(id,quantity)
  {
    let items = cartItems;
    let item = items.find(i => i.id === id);
    item.quantity = quantity;
    localStorage.setItem("cart",JSON.stringify(items));
    setCartItems(items);
    updateTotal(items);
  }

  function updateTotal(res)
  {
    let sum = 0;
    res.forEach((i) => sum = sum + Number(Math.floor(i.price * 80) * Number(i.quantity)));
    setTotal(sum);
  }

  function deleteId(id)
  {
     let items = cartItems;
     let itemIndex = items.findIndex(i => i.id === id);
     items.splice(itemIndex,1);
     if(items.length==0)
     {
       navigate('/');
     }
    localStorage.setItem("cart",JSON.stringify(items));
     setCartItems(items);
     updateTotal(items);
  }

  function notifyCart()
  {
    let cart = localStorage.getItem('cart');
    let items = [];
    if(cart)
    {
       items = JSON.parse(cart);
    }
    setCartItemCount(items.length);
  }

  return (
    <div className={styles.main}>
      <Header cartItemCount={cartItemCount}/>
        <div className="list">
        {
            cartItems.map((product) => (
               <CartItem update={updateItemQuantity} deleteItem={deleteId} item={product} notify={notifyCart}/>
            ))
          }
        </div>

        <div>
          <h3 className='float-end' style={{marginRight: '100px'}}>Total: {total}</h3>
        </div>
    </div>
  );
}

export default Cart;
