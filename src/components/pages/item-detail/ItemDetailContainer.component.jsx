import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//components
import LoaderComponent from '../../shared/loader/Loader.component';
import ItemDetailComponent from './ItemDetail.component';

//utils
import { filterById } from '../../../utils/items';

const ItemDetailContainerComponent = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(() => {
        filterById(Number(id))
        .then((item) => {
            setItem(item);
            setLoading(false);
        })
        .catch((err) => console.log(err))
    },[id])

    const itemDetail = () => {
        if(item){
            //si existe
            return <ItemDetailComponent item={item} />
        }else{
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
