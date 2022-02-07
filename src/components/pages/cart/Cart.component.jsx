import React from 'react';

import { Link } from 'react-router-dom';

//css
import './Cart.component.css';

//icons
import { RiDeleteBin6Line } from 'react-icons/ri';

//context
import { useCartContext } from '../../context/cart-context/CartContextProvider'; 

const CartComponent = () => {

    const { cartList, removeItem } = useCartContext()

    let tr = cartList.map((cart, index) => {
        return <tr key={index} className="cart-item-table-row col-12 ">
            <td className="col-md-1 td-text"> <button className="btn" onClick={() => {removeItem(cart.item)}}> <RiDeleteBin6Line className="btn-delete-icon" /> </button> </td>
            <td className="col-md-8">
                <img className="cart-item-img" src={cart.item.pictureUrl} alt="" />
                <Link to={'/item/'+cart.item.id} className="link-item"> {cart.item.title} </Link> 
                </td>
            <td className="col-md-1 td-text"><span>{cart.quantity}</span></td>
            <td className="col-md-1 td-text"><span>${cart.item.price}</span></td>
            <td className="col-md-1 td-text"><span>${cart.item.price * cart.quantity}</span></td>
        </tr>
    })

    return (
        <div className="container my-5 d-flex">
            <div className="cart-table col-md-8">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tr
                    }

                </tbody>
            </table>
            </div>
            <div className="cart-checkout col-md-4">
                CHECKOUT..(WORKING)
            </div>

        </div>
    );
}

export default CartComponent;
