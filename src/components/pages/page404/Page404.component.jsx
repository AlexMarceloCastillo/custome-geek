import React from 'react';

import { Link } from 'react-router-dom'

//css
import './Page404.component.css';

const Page404Component = () => {
    return (
        <div className="not-found">
            <div class="jumbotron">
                <img src={require('../../../assets/img/not-found-404.png')} alt="" />
                <hr class="my-4" />
                <p>Lo sentimos no hemos encontrado la página que busca.</p>
                <Link className="btn btn-primary btn-lg" to="/home">Volver al home</Link>
            </div>
        </div>
    );
}

export default Page404Component;
