import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//components
import ItemCountComponent from '../../shared/item-count/ItemCount.component.jsx';

//css
import './ItemDetail.component.css'

//context
import { useCartContext } from '../../context/cart-context/CartContextProvider.jsx';

const ItemDetailComponent = ({ item }) => {

    const { addToCart } = useCartContext()

    const [itemProduct, setTotalProduct] = useState(null)

    const onAdd = (quantity) => {
        setTotalProduct(item)
        addToCart(item, quantity)
    }

    return (
        <div className="card mb-3 col-8 mx-auto mt-4">
            <div className="row g-0 item-detail">
                <div className="col-md-8">
                    <img src={item.pictureUrl} className="item-detail-img" alt="..." />
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">Categoria: {item.category}</p>
                        <p className="card-text text-success">${item.price}</p>
                        {
                            itemProduct ? 
                            <Link className="btn btn-block btn-outline-success btn-lg" to={"/cart"}>Finalizar compra</Link> :
                            <ItemCountComponent className="item-count" stock={item.stock} initial={1} onAdd={onAdd} /> 
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailComponent;
