import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

//utils
import { getAllProducts, getProductsByCategory } from '../../../utils/items';

//components
import LoaderComponent from '../../shared/loader/Loader.component';
import ItemListComponent from './ItemList.component';

const ItemListContainerComponent = () => {

    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams()

    useEffect(async () => {

        setLoading(true);
        setProductsData([]);
        if (idCategory) {
            let products = await getProductsByCategory(idCategory)
            setLoading(false);
            setProductsData(products)
        }else {
            let products = await getAllProducts();
            setLoading(false);
            setProductsData(products)
        }
    }, [idCategory])


    return (
        <div className="container item-list-container">
            <LoaderComponent isLoading={loading} />
            { productsData ? <ItemListComponent items={productsData} /> : <h1>No se encontraron datos</h1>}

        </div>
    );
}

export default ItemListContainerComponent;
