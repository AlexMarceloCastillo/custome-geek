import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

//utils
import { getAllProducts, getProductsByCategory, getProductsByGarment } from '../../../utils/items';

//components
import LoaderComponent from '../../shared/loader/Loader.component';
import ItemListComponent from './ItemList.component';

//css
import './ItemListContainer.component.css'

const ItemListContainerComponent = () => {

    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams()
    const { idGarment } = useParams()

    useEffect(() => {
        setLoading(true);
        setProductsData([]);
          
        if (idCategory) {
            async function getDataByCat() {
                let products = await getProductsByCategory(idCategory)
                setLoading(false);
                setProductsData(products)
            }
            getDataByCat()
        } else if (idGarment){
            async function getDataByGar() {
                let products = await getProductsByGarment(idGarment)
                setLoading(false);
                setProductsData(products)
            }
            getDataByGar()
        } else {
            
            async function getData() {
                let products = await getAllProducts();
                setLoading(false);
                setProductsData(products)
            }
            getData()
        }
    }, [idCategory, idGarment])


    return (
        <div className="container item-list-container" id="productos">
            <LoaderComponent isLoading={loading} />
             {productsData ? <ItemListComponent items={productsData} /> : <h1>No se encontraron datos</h1>}
        </div>
    );
}

export default ItemListContainerComponent;
