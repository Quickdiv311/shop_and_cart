import React, {useEffect, useState } from 'react';
import './Home.css';
import Product from '../../components/Home/Product/Product';
import SignIn from '../SignIn/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { loginSelector } from '../../store/Reducers/loginReducer';
import { initSelector, initialize, itemsSelector, searchSelector, updateInit, updateSearch } from '../../store/Reducers/CartReducer';

const Home = () => {

  const products = useSelector(itemsSelector);
  const initizalized = useSelector(initSelector);
  const searchInput = useSelector(searchSelector);
  const dispatch = useDispatch();
  const logged = useSelector(loginSelector);
  const [visible, setVisible] = useState(false);
  let filteredProducts = products;
  filteredProducts = products.filter((product) => {
    if(searchInput === '')
      return product;

    if(product.title.toLowerCase().startsWith(searchInput))
      return product;
  })
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res=>
      {
        res.forEach((i) => {
          i.price = Math.floor(i.price * 80);
          i.quantity = 1;
          i.totalPrice = i.price;
          i.added = false;
         });
         if(initizalized)
         {
          dispatch(initialize(res));
          dispatch(updateInit());
         }
      })

      setTimeout(() => setVisible(true), 1000);
  },[]);

  function handleLogged(value)
  {
    if(value || !visible)
    {
       return "main-home";
    }
    return "main-home unlogged-home";
  }

  return (
    <div className={handleLogged(logged)}>
      {!logged && visible && <SignIn/>}
      <div className="main-home-content">
      <div className="row">
         {
          filteredProducts.map((product,i)=>(
            <div className="col-lg-3 col-md-6 col-sm-12 item">
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
