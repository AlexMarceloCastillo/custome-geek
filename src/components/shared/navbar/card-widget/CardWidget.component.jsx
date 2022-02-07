import React from 'react';
import { Link } from 'react-router-dom';

//css
import './CardWidget.component.css';

//icons
import { AiOutlineShoppingCart } from 'react-icons/ai';

//context
import { useCartContext } from '../../../context/cart-context/CartContextProvider'; 

const CardWidgetComponent = () => {
    const { cartCount } = useCartContext()
    return (
        <div className="cart-widget">
            <Link to={'/cart'} style={{color:'inherit',textDecorationStyle: 'inherit'}}>
            {cartCount}
            <AiOutlineShoppingCart className="cart-icon" />
            </Link>
        </div>
    );
}

export default CardWidgetComponent;
