import React, { useEffect } from 'react';

//css
import './Map.component.css';

//OpenLayers
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { XYZ } from 'ol/source';
import * as Proj from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Feature from 'ol/Feature';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';

const MapComponent = () => {
    useEffect(() => {
        let map = new Map(
            {   

                target: 'map',
                view: new View({
                    center: Proj.fromLonLat([-68.7776402, -32.897781]),
                    zoom: 15
                }),
                layers: [
                    new TileLayer({
                        source: new XYZ({ url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png', crossOrigin: 'anonymous' })
                    })
                ],
                controls: defaultControls({ attribution: false, rotate: false, zoom: true })
            }
        )

        let iconMark = new Style({
            image: new Icon({
              src: require("../../../../assets/img/custom-geek-logoV1.png"),
              crossOrigin: 'anonymous',
              scale: 0.02
            })
          });
        let geometry = new Point(Proj.fromLonLat([-68.7776402, -32.897781]))
        let feature = new Feature(geometry)
        feature.setStyle(iconMark)
        let vectorSource = new VectorSource({ features: [feature]});
        let vectorLayer = new VectorLayer({ source: vectorSource});
        map.addLayer(vectorLayer)
    }, []);

    return (
        <div className="map-component col-12">
            <div className="map-component-info">
                <h1>¿Donde estamos?</h1>
                <h2>Argentina</h2>
                <h4>Mendoza, Guaymallen</h4>
                <a href="https://goo.gl/maps/ZwzKAqM5ot9zKH3h6" target="_blank">
                <button className="btn btn-outline btn-google-maps">
                    <p className="btn-google-maps-text">Google maps</p>
                    <img className="btn-maps" src={require('../../../../assets/img/google-maps.png')} alt="" />
                </button></a>
            </div>
            <div className="map" id="map">
            
            </div>
        </div>
    );
}

export default MapComponent;
