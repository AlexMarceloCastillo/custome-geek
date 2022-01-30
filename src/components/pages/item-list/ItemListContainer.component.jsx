import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

//utils
import { getItems, filterByCat } from '../../../utils/items';

//components
import LoaderComponent from '../../shared/loader/Loader.component';
import ItemListComponent from './ItemList.component';

const ItemListContainerComponent = () => {

    const [itemsData, setItemsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams()

    useEffect(() => {
        setLoading(true);
        setItemsData([]);
        if (idCategory) {
            filterByCat(idCategory)
                .then(data => {
                    setLoading(false);
                    setItemsData(data);
                })
        }else {
            getItems()
            .then(data => {
                setLoading(false);
                setItemsData(data)
            })
        }
    }, [idCategory])


    return (
        <div className="item-list-container">
            <LoaderComponent isLoading={loading} />
            { itemsData ? <ItemListComponent items={itemsData} /> : <h1>No se encontraron datos</h1>}

        </div>
    );
}

export default ItemListContainerComponent;
