import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
 
  return (
    <Provider store={store}>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
