import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

//icons
import { AiOutlineQuestion } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

//css
import './EmptyCart.component.css';

const EmptyCartComponent = () => {
    return (
        <div className="empty-cart jumbotron">
            <h1 className="empty-cart-title display-4">
                <FiShoppingCart className="empty-cart-icon" />
                <AiOutlineQuestion className="empty-question" />
            </h1>
            <p className="lead">Usted no tiene productos agregados a su carrito.</p>
            <hr className="my-4" />
            <Link to={'/#productos'} ><button className='btn btn-primary' style={{ marginRight: 10 + 'px' }}>Ver productos</button></Link>
        </div>
    );
}

export default EmptyCartComponent;
