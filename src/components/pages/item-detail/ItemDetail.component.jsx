import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

//components
import ItemCountComponent from '../../shared/item-count/ItemCount.component.jsx';
import RelatedProductsComponent from './related-products/RelatedProducts.component.jsx';

//css
import './ItemDetail.component.css'

//context
import { useCartContext } from '../../context/cart-context/CartContextProvider.jsx';

//toast
import { toast } from 'react-toastify';


const ItemDetailComponent = ({ item, products }) => {

    const { addToCart } = useCartContext()
    const [loading, setLoading] = useState(false);
    const [itemProduct, setTotalProduct] = useState(null)

    const onAdd = (quantity) => {
        setLoading(true);
        setTimeout(() => {
            try {
                addToCart(item, quantity);
                setLoading(false);
                setTotalProduct(item)
                toast.success(`${quantity > 1 ? quantity + ' productos añadidos a su carrito' : ' producto añadido a su carrito'}`, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    theme: 'colored'
                })
            } catch (error) {
                setLoading(false);
                toast.error(`${error.message}`, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    theme: 'colored'
                })
            }
        }, 2000);
    }

    return (
        <div className="card col-10 mx-auto mt-4 card-item-detail">
            <div className="row g-0 item-detail">
                <div className="col-md-6">
                    <img src={item.pictureUrl} className="item-detail-img" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/home#productos">Productos</Link></li>
                                <li className="breadcrumb-item"><Link to={`/garment/${item.garment?.toLowerCase()}#productos`}>{item.garment}</Link></li>
                                <li className="breadcrumb-item"><Link to={`/category/${item.category}#productos`}>{item.category?.trim().toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase())}</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{item.title}</li>
                            </ol>
                        </nav>
                        <h5 className="card-text" >
                            <span style={{ marginRight: 5 + 'px', fontSize: 15 + 'px', textDecoration: 'line-through' }}>
                                {item.originalPrice !== item.price && item.originalPrice + ',00 ARS'}</span>
                            {item.price}, 00 ARS</h5>
                        <p className="card-text">Categoria: {item.category}</p>
                        <p className="card-text">{item.description}</p>
                        {
                            item.stock > 0 ?
                                <p className="card-text text-success">
                                    <span className="badge bg-success">{item.stock} disponibles</span>
                                </p> :
                                <p className="card-text text-danger">
                                    <span className="badge bg-danger"> No hay existencias disponibles</span>
                                </p>

                        }
                        {
                            !loading & !itemProduct ?
                                <ItemCountComponent className="item-count" stock={item.stock} initial={1} onAdd={onAdd} />
                                :
                                (itemProduct ?
                                    <div className="d-grid gap-2">
                                        <Link className="btn btn-block btn-outline-success btn-lg" to={"/cart"}>Finalizar compra</Link>
                                    </div>
                                    : <ItemCountComponent className="item-count" loading={loading} stock={item.stock} initial={1} onAdd={onAdd} />)
                        }
                    </div>
                </div>
            </div>
            <RelatedProductsComponent products={products} />
        </div>
    );
}

export default ItemDetailComponent;
