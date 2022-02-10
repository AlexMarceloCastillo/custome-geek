import React from 'react';
//components
import ItemListContainerComponent from '../item-list/ItemListContainer.component';

//css
import './Home.component.css'

const HomeComponent = () => {

    return (
        <div className="home">
            <section className="home-section">
                <div className="info d-flex justify-content-between align-items-center">
                    <div className="card card-search" style={{ width: 18 + 'rem' }}>
                        <img src={require('../../../assets/img/search.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Encuetra las mejores prendas de la cultura geek.</p>
                        </div>
                    </div>
                    <div className="card card-about" style={{ width: 18 + 'rem' }}>
                        <img src={require('../../../assets/img/about.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text">Somos una empresa dedicada a la venta de ropa de la cultura geek de la mejor calidad.</p>
                        </div>
                    </div>
                    <div className="card card-pay" style={{width: 18+'rem'}}>
                        <img src={require('../../../assets/img/pay.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text">Aceptamos distintos medios de pago tanto como tarjeta de debito, transferencia bancaria y efectivo(solo retiro en el local).</p>
                        </div>
                    </div>

                </div>
            </section>
            <ItemListContainerComponent />
        </div>
    );
}

export default HomeComponent;
