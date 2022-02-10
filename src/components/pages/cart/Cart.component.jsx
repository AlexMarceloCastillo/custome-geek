import React, { useState } from 'react';

import { Link } from 'react-router-dom';

//component
import LoaderComponent from '../../shared/loader/Loader.component.jsx';

//css
import './Cart.component.css';

//icons
import { RiDeleteBin6Line } from 'react-icons/ri';

//context
import { useCartContext } from '../../context/cart-context/CartContextProvider';

const CartComponent = () => {

    let total = 0;
    const [loading, setLoading] = useState(false);

    const { cartList, removeItem, cleanCart } = useCartContext()

    let tr = cartList.map((cart, index) => {
        total += cart.item.price * cart.quantity;
        return <tr key={index} className="cart-item-table-row col-12 ">
            <td className="col-md-1 td-text"> <button className="btn" onClick={() => { removeItem(cart.item) }}> <RiDeleteBin6Line className="btn-delete-icon" /> </button> </td>
            <td className="col-md-8">
                <img className="cart-item-img" src={cart.item.pictureUrl} alt="" />
                <Link to={'/item/' + cart.item.id} className="link-item"> {cart.item.title} </Link>
            </td>
            <td className="col-md-1 td-text"><span>{cart.quantity}</span></td>
            <td className="col-md-1 td-text"><span>${cart.item.price}</span></td>
            <td className="col-md-1 td-text"><span>${cart.item.price * cart.quantity}</span></td>
        </tr>
    })
    
    let cleanItems = () => {
        if(window.confirm('¿Esta seguro de eliminar todos los items de su carrito?')) {
            setLoading(true)
            setTimeout(() => {
            setLoading(false)    
            cleanCart()
            }, 2000)
        }
    }

    return (
        <div className="container my-5 d-flex">
            {cartList.length > 0
                ?
                <>
                    <LoaderComponent isLoading={loading} />
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
                        <div className='actions-all-items'>
                            <button className='btn btn-primary' style={{marginRight: 10+'px'}}>Volver al home</button>
                            <button className='btn btn-outline-danger' onClick={cleanItems}>Limpiar carrito</button>
                        </div>
                    </div>
                    <div className="cart-checkout col-md-4">
                        CHECKOUT( WORKING...)
                        TOTAL: ${total}
                    </div>
                </> :
                <div className='no-items'>
                    <h4>No hay items en el carrito</h4>
                    <Link to={'/'}><button className='btn btn-primary' style={{marginRight: 10+'px'}}>Volver al home</button></Link>
                </div>
                }

        </div>
    );
}

export default CartComponent;
