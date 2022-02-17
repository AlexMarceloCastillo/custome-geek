import React from 'react';
import { Link } from 'react-router-dom';

//icons
import { BsCartPlus, BsEye } from 'react-icons/bs';

//css
import './Item.component.css'

//context
import { useCartContext } from '../../context/cart-context/CartContextProvider'; 



const ItemComponent = ({ item }) => {

    const { addToCart } = useCartContext()

    const onAdd = () => {
        addToCart(item)
    } 

    return (

                <div className="card card-item">
                    <Link to={"/item/"+item.id}><img src={item.pictureUrl} className="card-img-top item-img" alt="..." /></Link>
                    <div className="card-body card-item-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Categoria: {item.category}</p>
                        <p className="card-text">{item.price} ARS</p>
                        { item.discount > 0 && <p className="card-text offer">-{item.discount}%</p> }
                        <Link to={"/item/"+item.id}><button className="btn btn-outline-secondary"><BsEye /></button></Link>
                        <button className="btn btn-add-to-cart-geek float-end mr-4" onClick={onAdd}  disabled={item.stock <= 0}><BsCartPlus className="icon-cart-plus"/></button>
                    </div>
                </div>
    );
}

export default ItemComponent;
