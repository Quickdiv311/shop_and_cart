import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import {useState} from 'react';
import AppContext from './context';

function App() {


  const [cartItems, setCartItems] = useState([]);
  const [logged, setLogged] = useState(false);

  const dispatcherEvents= (actionType, payload) => {
    switch(actionType)
    {
      case "ADD_ITEM":{
        let items = cartItems.slice();
        items.push(payload);
        setCartItems(items);
        break;
      }

      case "DELETE_ITEM":{
        let items = cartItems.slice();
        let index = items.indexOf(payload);
        if(index>=0)
        {
           items.splice(index,1);
        }
        setCartItems(items);
        break;
      }

      case "UPDATE_ITEM":{
        let items = cartItems.slice();
        let index = items.findIndex(i => i.id === payload.id);
        items[index] = payload;
        setCartItems(items);
        break;
      }

      case "UPDATE_LOGGED":{
         setLogged(!logged);
         break;
      }

      default: {
        console.log("invalid"); 
      }
    }
  }

  return (
   <AppContext.Provider value={{cartItems, dispatcherEvents, logged}}>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
      </BrowserRouter>
   </AppContext.Provider>
  );
}

export default App;
