import React, { Component } from 'react';
import api from '../../services/api';

import Paginator from '../../components/Paginator';

import birth from '../../assets/images/star.png';

import './style.css';

export default class Character extends Component {
    state = {
        characters: [],
        pagination: {
            pages: 0,
            charactersPerPage: 8,
            currentPage: 1,
            characters: []
        }
    }

    handlePagination(value) {
        console.log(value);
    }

    cleanFilterSelected = (alive, dead, all) => {
        alive.classList.remove('alive-button-selected');
        dead.classList.remove('dead-button-selected');
        all.classList.remove('all-characters-selected');
    }

    filterCharacters = e => {
        const alive = document.querySelector('.alive-button');
        const dead = document.querySelector('.dead-button');
        const all = document.querySelector('.all-characters');

        this.cleanFilterSelected(alive, dead, all);

        switch(e.target.innerHTML) {
            case 'Vivo':
                alive.classList.add('alive-button-selected');
                break;
            case 'Morto':
                dead.classList.add('dead-button-selected');
                break;
            default:
                all.classList.add('all-characters-selected');
        }
    }

    async componentDidMount() {
        document.querySelector('.all-characters').classList.toggle('all-characters-selected');

        const response = await api.get('characters');
        const pages = Math.trunc(response.data.length / this.state.pagination.charactersPerPage);
        const characters = response.data.filter(char => char.char_id <= this.state.pagination.charactersPerPage);
        const pagination = { pages, characters };

        this.setState({ characters: response.data, pagination: Object.assign(this.state.pagination, pagination) });
        console.log(this.state);
    }

    render() {
        return (
            <div className="main-container">
                <main>
                    <div className="characters-header">
                        <h1>Personagens</h1>
                        <span className="filter-container">
                            <h3>Filtre por:</h3>
                            <button className="alive-button" onClick={this.filterCharacters}>Vivo</button>
                            <button className="dead-button" onClick={this.filterCharacters}>Morto</button>
                            <button className="all-characters" onClick={this.filterCharacters}>Todos</button>
                        </span>
                    </div>

                    <section className="characters">
                    {this.state.pagination.characters.map(char =>
                        <article key={char.char_id}>
                            <img className="background-image" src={char.img} alt="foto do personagem em plano de fundo" />
                            <div className="character">
                                <span className={char.status === 'Alive' ? 'alive' : 'dead'}>{char.status === 'Alive' ? 'Vivo' : 'Morto'}</span>

                                <div className="character-info">
                                    <h2>{char.name}</h2>
                                    <p><img className="birth-date" src={birth} alt="" />{char.birthday}</p>
                                    <p>{char.occupation.join(', ')}</p>
                                </div>
                            </div>
                        </article>
                    )}
                    </section>
                    
                    {
                        this.state.characters.length > 0 ?
                        <Paginator charactersPerPage={8} handlePagination={this.handlePagination} registers={this.state} />
                        : <div></div>
                    }
                </main>
            </div>
        );
    }
}