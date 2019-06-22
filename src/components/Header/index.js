import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/breaking-bad-logo.png';

import './style.css';

export default class Header extends Component {
    state = {
        search: ''
    }

    setActiveLink = (pathName) => {
        let path = pathName === '/episode' ? 'Episódios' : pathName === '/sugestion' ? 'Sugestão' : pathName === '/' ? 'Personagens' : pathName;
        let links = document.querySelector('.main-menu').querySelectorAll('li');

        links.forEach(link => {
            link.classList.remove('active');
        });

        let link = [...links].find(link => link.innerHTML === path);
        link.classList.add('active');
    }

    componentDidMount() {
        this.setActiveLink(window.location.pathname);
    }

    handleClick = e => {
        this.setActiveLink(e.target.innerHTML);
    }

    render() {
        return (
            <div className="header-container">
                <header>
                    <figure className="logo">
                        <img src={logo} alt="logo série breaking bad" />
                        <figcaption>logo série breaking bad</figcaption>
                    </figure>

                    <nav className="main-menu">
                        <ul>
                            <Link to="/">
                                <li onClick={this.handleClick}>Personagens</li>
                            </Link>
                            <Link to="/episode">
                                <li onClick={this.handleClick}>Episódios</li>
                            </Link>
                            <Link to="/sugestion">
                                <li onClick={this.handleClick}>Sugestão</li>
                            </Link>
                        </ul>
                    </nav>

                    <span className="search-container">
                        <form>
                            <label htmlFor="search">Pesquise os personagens</label>
                            <input id="search" type="text" name="search" placeholder="Pesquise os personagens" />
                        </form>
                    </span>
                </header>
            </div>
        );
    }
}