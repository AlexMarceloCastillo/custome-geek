import React from 'react';


//components
import ItemCountComponent from '../../shared/item-count/ItemCount.component.jsx';

//css
import './ItemDetail.component.css'

const ItemDetailComponent = ({ item }) => {

    const onAdd = (items, clearItems, bajarStock) => {
        alert(`${items} Items agregados al carrito`)
        //Limpiar cantidad de items
        clearItems();
        //Bajar el total de stock actual
        bajarStock();
    }

    return (
        <div className="card mb-3 col-10 mx-auto mt-4">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.pictureUrl} className="item-detail-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">Categoria: {item.category}</p>
                        <p className="card-text"><small className="text-muted">${item.price}</small></p>
                        <ItemCountComponent className="item-count" stock={5} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailComponent;
