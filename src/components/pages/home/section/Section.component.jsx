import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

//css
import './Section.component.css';

const SectionComponent = () => {
    return (
        <div>
            <div className="row1-container">
                <div className="box box-down cyan">
                    <h2>Metodos de pago</h2>
                    <p>Aceptamos distintos medios de pago tanto como tarjeta de debito, transferencia bancaria y efectivo(solo retiro en el local).</p>
                    <img className="icon-section" src={require('../../../../assets/img/payment.png')} alt="" />
                </div>

                <div className="box red">
                    <h2>Sobre Nosotros</h2>
                    <p>Somos una empresa creada en 2021 dedicada a la venta de ropa de la cultura geek de la mejor calidad.</p>
                    <img className="icon-section" src={require('../../../../assets/img/about.png')} alt="" />
                </div>

                <div className="box box-down blue">
                    <h2>Busca</h2>
                    <p>Encuentra las mejores prendas de la cultura geek.</p>
                    <img className="icon-section" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
                </div>
            </div>
            <div className="row2-container">
                <div className="box orange">
                    <h2>¿Donde estamos?</h2>
                    <p>Nos encontramos en Argentina, Mendoza. <Link to="/home#map"> Ver en el mapa</Link></p>
                    <img className="icon-section" src={require('../../../../assets/img/where-are.png')} alt="" />
                </div>
            </div>
            <hr />
        </div>
    );
}

export default SectionComponent;
