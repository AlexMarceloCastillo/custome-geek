import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';

//shared component
import CardWidgetComponent from './card-widget/CardWidget.component.jsx';

//icons
import { AiOutlineSearch } from 'react-icons/ai'

//css
import './Navbar.component.css'


const NavbarComponent = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('')

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const goSearch = (event) => {
        event.preventDefault()
        navigate({
            pathname: '/search',
            search: `?query=${search}`,
        });
    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <h6><Link className="navbar-brand" to="/">
                    <img className="logo" src={require('../../../assets/img/custom-geek-logoV1.png')} alt="" />
                </Link></h6>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/home#map">¿Donde estamos?</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu dr" aria-labelledby="navbarDropdown">
                                <li className="dropdown-item">
                                    <Link className="nav-link" to="/category/anime#productos">Anime</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link className="nav-link" to="/category/movie#productos">Peliculas</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link className="nav-link" to="/category/series#productos">Series</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link className="nav-link" to="/category/videogame#productos">Videojuegos</Link>
                                </li>


                                    <li className="dropdown-item nav-item dropdown garment-dropdown dropend">
                                        <button className="btn nav-link dropdown-toggle garment-category " id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Prendas
                                        </button>
                                        <ul className="dropdown-menu garment-menu" aria-labelledby="navbarDropdown2">
                                            <li className="dropdown-item garment-item">
                                                <Link className="nav-link" to="/garment/buzo#productos">Buzos</Link>
                                            </li>
                                            <li className="dropdown-item garment-item">
                                                <Link className="nav-link" to="/garment/campera#productos">Camperas</Link>
                                            </li>
                                            <li className="dropdown-item garment-item">
                                                <Link className="nav-link" to="/garment/casco#productos">Cascos</Link>
                                            </li>
                                            <li className="dropdown-item garment-item">
                                                <Link className="nav-link" to="/garment/mascara#productos">Mascaras</Link>
                                            </li>
                                            <li className="dropdown-item garment-item">
                                                <Link className="nav-link" to="/garment/pantalon#productos">Pantalones</Link>
                                            </li>
                                            <li className="dropdown-item garment-item">
                                                <Link className="nav-link" to="/garment/remera#productos">Remeras</Link>
                                            </li>
                                        </ul>

                                    </li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" value={search} onChange={handleSearch} type="search" placeholder="Buscar" aria-label="Buscar" />
                        <button className="btn btn-search" type="submit" onClick={goSearch}><AiOutlineSearch className="search-icon" /></button>
                    </form>
                    <CardWidgetComponent />
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;
