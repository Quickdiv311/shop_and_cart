import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Header from '../../components/shared/Header/Header';
import Product from '../../components/Home/Product/Product';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res=>
      {
        res.forEach((i) => i.quantity = 0);
        setProducts(res);
      })
  },[])

  function notifyHome()
  {
    let cart = localStorage.getItem('cart');
    let items = [];
    if(cart)
    {
       items = JSON.parse(cart);
    }
    setItemCount(items.length);
  }

  return (
    <div className={styles.main}>
      <Header itemCount={itemCount}/>
      <div className={styles.content}>
      <div className="row">
         {
          products.map((product,i)=>(
            <div className="col-3">
              <Product product={product} index={i} notify={notifyHome}/>
            </div>
          ))
         }
      </div>
      </div>
    </div>
  );
}

export default Home;
