import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css';
import CartItem from '../../components/Cart/CartItem/CartItem';
import Header from '../../components/shared/Header/Header';

const Cart = () => {

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res=>{
      res = res.filter(i => i.id < 5);
      res.forEach(i => i.quantity = 1);
      updateTotal(res);
      setProducts(res)})
  },[])

  function updatePrice(item, quantity)
  {
    let items = products;
    let itemIndex = products.findIndex(i => i.id === item.id);
    items[itemIndex].quantity = quantity;
    setProducts(items);
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
     let items = products;
     let itemIndex = items.findIndex(i => i.id === id);
     items.splice(itemIndex,1);
     setProducts(items);
     updateTotal(items);
  }

  return (
    <div className={styles.main}>
      <Header/>
        <div className="list">
        {
            products.map((product) => (
               <CartItem update={updatePrice} deleteItem={deleteId} item={product}/>
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
