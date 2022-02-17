import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

//shared components
import NavbarComponent from './components/shared/navbar/Navbar.component.jsx';
import FooterComponent from './components/shared/footer/Footer.component.jsx'
import { ToastContainer } from 'react-toastify';
//pages components
import HomeComponent from './components/pages/home/Home.component.jsx';
import ItemDetailContainer from './components/pages/item-detail/ItemDetailContainer.component.jsx';
// import Page404Component from './components/pages/page404/Page404.component.jsx';
import CartComponent from './components/pages/cart/Cart.component.jsx';
import SearchComponent from './components/pages/search/Search.component.jsx';

//context
import CartContextProvider from './components/context/cart-context/CartContextProvider.jsx';

//css
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <HashRouter>
    <CartContextProvider>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<HomeComponent />}></Route>
        <Route exact path="/category/:idCategory" element={<HomeComponent />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        <Route path="/search" element={<SearchComponent />}></Route>
        <Route path="/cart" element={<CartComponent />}></Route>
      </Routes>
      <FooterComponent />
      <ToastContainer />
    </CartContextProvider>
    </HashRouter>
  );
}

export default App;
