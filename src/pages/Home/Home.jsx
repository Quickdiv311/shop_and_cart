import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Header from '../../components/shared/Header/Header';
import Product from '../../components/Home/Product/Product';

const Home = () => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res=>
      {
        res.forEach((i) => i.quantity = 1);
        setProducts(res);
      })
  },[])

  return (
    <div className={styles.main}>
      <Header/>
      <div className={styles.content}>
      <div className="row">
         {
          products.map((product,i)=>(
            <div className="col-3">
              <Product product={product} index={i}/>
            </div>
          ))
         }
      </div>
      </div>
    </div>
  );
}

export default Home;
