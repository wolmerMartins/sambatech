import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logo from '../../assets/images/breaking-bad-logo.png';

import './style.css';

export default class Header extends Component {
    state = {
        search: '',
        character: [],
        url: ''
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

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();
        
        if (this.state.search !== '') {
            const character = await api.get(`characters?name=${this.state.search}`);

            this.setState({ character: character.data });

            console.log(this.state);
        }
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
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="search">Pesquise os personagens</label>
                            <input id="search" type="text" value={this.state.search} onChange={this.handleChange} name="search" placeholder="Pesquise os personagens" />
                            <button type="submit"><span>Pesquisar</span></button>
                        </form>
                    </span>
                </header>
            </div>
        );
    }
}