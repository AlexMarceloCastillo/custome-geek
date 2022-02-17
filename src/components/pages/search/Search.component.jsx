import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

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
        })
    },[searchQuery])

    const renderData = 
        items.map((item, index) => {
            return <ItemComponent key={index} item={item} />
        })
    

    return (
        <div className="search">
            <h5 className="result">Resultados de la busqueda de "{searchQuery}"</h5>
            
            { !loading ? (items.length ? renderData :  <h1 className="no-result">No se encontraron datos</h1>) : <LoaderComponent isLoading={loading} />}
        </div>
    );
}

export default SearchComponent;
