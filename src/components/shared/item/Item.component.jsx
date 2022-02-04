import React from 'react';
import { Link } from 'react-router-dom';

//icons
import { BsCartPlus } from 'react-icons/bs';
//css
import './Item.component.css'

const ItemComponent = ({ item }) => {

    const addToCart = () => {
        console.log(item)
    }

    return (

                <div className="card card-item">
                    <Link to={"/item/"+item.id}><img src={item.pictureUrl} className="card-img-top item-img" alt="..." /></Link>
                    <div className="card-body card-item-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text text-success">${item.price}</p>
                        <Link to={"/item/"+item.id}><button className="btn btn-outline-secondary">Ver detalle</button></Link>
                        <button className="btn btn-outline-success float-end mr-4" onClick={addToCart}><BsCartPlus className="icon-cart-plus" /></button>
                    </div>
                </div>
    );
}

export default ItemComponent;
