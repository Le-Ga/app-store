import React from 'react';
import './App.scss';
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link,
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Cart from './Cart';
import logo from './logo1.png';
import cartImage from './shopping-cart.svg';

function App() {
   return (
      <div>
         <Router>
            <nav className='nav-bar'>
               <div className='nav-container container'>
                  <div className='logo'>
                     <Link to='/home' className='link-logo'>
                        <img src={logo} alt="logo" width='50px' />
                     </Link>
                  </div>
                  <div className='nav-links'>
                     <Link to='/home' className='link'>Products</Link>
                     <Link to='/about' className='link'>About</Link>
                     <Link to='/cart' className='link'><img src={cartImage} alt="cart" width='40px' /></Link>
                  </div>
               </div>
            </nav >

            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='home' element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="cart" element={<Cart />} />
            </Routes>
         </Router>
      </div >
   );
}
export default App;
