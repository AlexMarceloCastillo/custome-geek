import React from 'react';

//components
import Item from '../../shared/item/Item.component';



const ItemListComponent = ({ items }) => {

    const dataCard = items.map((item, index) => { return <div className="col-md-4 mb-4" key={index}><Item  item={item} /> </div>})

    return (

        <div className="row my-5">
            {dataCard}
        </div>
    );
}

export default ItemListComponent;
