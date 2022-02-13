import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//components
import LoaderComponent from '../../shared/loader/Loader.component';
import ItemDetailComponent from './ItemDetail.component';

//utils
import { getOneProduct } from '../../../utils/items';

const ItemDetailContainerComponent = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(async () => {
        try {
            let product = await getOneProduct(id)
            setLoading(false);
            setProduct(product)
        } catch (error) {
            console.log('Error', error)
            setLoading(false);
        }
    }, [id])

    const itemDetail = () => {
        if (product) {
            //si existe
            return <ItemDetailComponent item={product} />
        } else {
            return <h1>No se encontraron resultados =(</h1>
        }

    }

    return (
        <div>
            <LoaderComponent isLoading={loading} />
            {
                !loading &&
                itemDetail()
            }
        </div>
    );
}

export default ItemDetailContainerComponent;
