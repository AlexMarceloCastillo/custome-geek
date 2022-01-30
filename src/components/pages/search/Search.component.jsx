import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

//components
import ItemComponent from '../../shared/item/Item.component';
import LoaderComponent from '../../shared/loader/Loader.component';

//utils
import { searchItems } from '../../../utils/items';

//css
import './Search.component.css';

const SearchComponent = () => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    const search = useLocation().search;  
    const searchQuery = new URLSearchParams(search).get('query');

    useEffect(() => {
        setLoading(true);
        searchItems(searchQuery)
        .then((res) => {
            setLoading(false);
            setItems(res);
            console.log(res)
        })
    },[search])

    const renderData = 
        items.map((item, index) => {
            return <ItemComponent key={index} item={item} />
        })
    

    return (
        <div className="search">
            <h5 className="result">Resultados de la busqueda de "{searchQuery}"</h5>
            <LoaderComponent isLoading={loading} />
            { items.length && !loading ? renderData : <h1 className="no-result">No se encontraron datos</h1> }
            {/* { items ? <ItemListComponent items={items} /> : <h1>No se encontraron datos</h1>} */}
            {/* { items ? <ItemComponent item={items[0]} /> : <h1>No se encontraron datos</h1>} */}
        </div>
    );
}

export default SearchComponent;
