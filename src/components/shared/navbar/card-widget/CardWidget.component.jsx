import React from 'react';

//css
import './CardWidget.component.css';

//icons
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CardWidgetComponent = ({count}) => {
    return (
        <div className="cart-widget">
            {count}
            <AiOutlineShoppingCart className="cart-icon" onClick={() => {
                alert('CARRITO')
            }}/>
        </div>
    );
}

export default CardWidgetComponent;
