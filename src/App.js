import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
