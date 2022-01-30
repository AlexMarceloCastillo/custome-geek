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
                    <div className="info-card">
                        <h5>Busca</h5>
                        <h6>Encuentra los mejores disfraces con una calidad excelente</h6>
                    </div>
                    <div className="info-card">
                        <h5>¿Quienes somos?</h5>
                        <h6>Somos una empresa dedicada a la venta de disfraces de la cultura geek</h6>
                    </div>
                    <div className="info-card">
                        <h5>Pagos aceptados</h5>
                        <h6>Debito, Credito, Transferencia Bancaria</h6>
                    </div>

                </div>
            </section>
            <ItemListContainerComponent />
        </div>
    );
}

export default HomeComponent;
