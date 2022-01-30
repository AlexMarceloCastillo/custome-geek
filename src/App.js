import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//shared components
import NavbarComponent from './components/shared/navbar/Navbar.component.jsx';
//import FooterComponent from './components/shared/footer/footer.component';

//pages components
import HomeComponent from './components/pages/home/Home.component.jsx';
import ItemDetailContainer from './components/pages/item-detail/ItemDetailContainer.component.jsx';
// import Page404Component from './components/pages/page404/Page404.component.jsx';
import CartComponent from './components/pages/cart/Cart.component.jsx';
import SearchComponent from './components/pages/search/Search.component.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route exact path="/" element={<HomeComponent />}></Route>
        <Route exact path="/category/:idCategory" element={<HomeComponent />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        <Route path="/search" element={<SearchComponent />}></Route>
        <Route path="/cart" element={<CartComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
