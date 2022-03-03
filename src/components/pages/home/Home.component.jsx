import React from 'react';
//components
import ItemListContainerComponent from '../item-list/ItemListContainer.component';
import MapComponent from './map/Map.component';
import SectionComponent from './section/Section.component';

//css
import './Home.component.css'

const HomeComponent = () => {

    return (
        <div className="home">
            <SectionComponent />
            <ItemListContainerComponent />
            <hr />
            <MapComponent />
        </div>
    );
}

export default HomeComponent;
