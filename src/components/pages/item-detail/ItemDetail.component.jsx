import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//components
import ItemCountComponent from '../../shared/item-count/ItemCount.component.jsx';
import LoaderComponent from '../../shared/loader/Loader.component.jsx';

//css
import './ItemDetail.component.css'

//context
import { useCartContext } from '../../context/cart-context/CartContextProvider.jsx';

const ItemDetailComponent = ({ item }) => {

    const { cartList, addToCart } = useCartContext()
    const [loading, setLoading] = useState(false);
    const [itemProduct, setTotalProduct] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')

    const onAdd = (quantity) => {
        try {
            setLoading(true);
            setErrorMsg('');
            addToCart(item, quantity);
            setTimeout(() => {
                setLoading(false);
                setTotalProduct(item)
            }, 2000);

        } catch (error) {
            setTimeout(() => {
                setLoading(false);
                setErrorMsg(error.message)
            }, 2000);
        }
    }

    return (
        <div className="card mb-3 col-8 mx-auto mt-4">
            <div className="row g-0 item-detail">
                <div className="col-md-7">
                    <img src={item.pictureUrl} className="item-detail-img" alt="..." />
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <h5 className="card-text" >
                            <span style={{marginRight:5+'px',fontSize: 15+'px',textDecoration: 'line-through'}}>
                                { item.originalPrice !== item.price && '$'+item.originalPrice+',00' }</span>
                            ${item.price}, 00</h5>
                        <p className="card-text">Categoria: {item.category}</p>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text text-success">{item.stock} disponibles</p>
                        {
                            !loading & !itemProduct ?
                            <ItemCountComponent className="item-count" stock={item.stock} initial={1} onAdd={onAdd} /> 
                            :
                            (itemProduct ? <Link className="btn btn-block btn-outline-success btn-lg" to={"/cart"}>Finalizar compra</Link> 
                            : <LoaderComponent isLoading={loading} />)
                        }
                        <p className="card-text text-danger mt-2">{errorMsg}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailComponent;
