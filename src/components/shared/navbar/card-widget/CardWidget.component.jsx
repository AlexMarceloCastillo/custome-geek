import React from 'react';
import { Link } from 'react-router-dom';

//css
import './CardWidget.component.css';

//icons
import { FiShoppingCart } from 'react-icons/fi';

//context
import { useCartContext } from '../../../context/cart-context/CartContextProvider'; 

const CardWidgetComponent = () => {
    const { cartCount } = useCartContext()
    return (
        <div className="cart-widget">
            <Link to={'/cart'} style={{color:'inherit',textDecoration: 'none'}}>
            {cartCount > 0 ? <span className="cart-widget-count">{cartCount}</span> : ''}
            <FiShoppingCart className="cart-icon" />
            </Link>
        </div>
    );
}

export default CardWidgetComponent;
