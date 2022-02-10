import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h6><Link className="navbar-brand" to="/">Custome Geek Ecommerce</Link></h6>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/anime">Anime</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/movie">Peliculas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/series">Series</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/videogame">Videojuegos</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" value={search} onChange={handleSearch} type="search" placeholder="Buscar" aria-label="Buscar"/>
                        <button className="btn btn-outline-success" type ="submit" onClick={goSearch}><AiOutlineSearch /></button>
                    </form>
                    <CardWidgetComponent />
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;
