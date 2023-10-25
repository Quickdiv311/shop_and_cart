import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Detail from './pages/Detail/Detail';
import Parent from './pages/Parent/Parent';

function App() {
 
  return (
    <Provider store={store}>
      <BrowserRouter>
       <Parent>
       <Routes>
       <Route path="/" element={<Navigate to="/home" />} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/:itemId' element={<Detail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
       </Parent>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
