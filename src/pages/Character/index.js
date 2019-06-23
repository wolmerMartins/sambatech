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
            registersPerPage: 8,
            currentPage: 1,
            registers: []
        }
    }

    displayCharacters = async characters => {
        await this.setState({ characters });

        this.setPagination();
    }

    getAllCharacters = async e => {
        const response = await api.get('characters');

        this.displayCharacters(response.data);
    }

    getDeadCharacters = async e => {
        const dead = await api.get('characters');

        this.displayCharacters(dead.data.filter(char => char.status !== 'Alive'));
    }

    getAliveCharacters = async e => {
        const alive = await api.get('characters');

        this.displayCharacters(alive.data.filter(char => char.status === 'Alive'));
    }

    handlePagination = async (response) => {
        const pagination = await response;
        this.setState({ pagination });
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
                this.getAliveCharacters();
                break;
            case 'Morto':
                dead.classList.add('dead-button-selected');
                this.getDeadCharacters();
                break;
            default:
                all.classList.add('all-characters-selected');
                this.getAllCharacters();
        }
    }

    setPagination = e => {
        const pages = Math.trunc(this.state.characters.length / this.state.pagination.registersPerPage);
        const registers = this.state.characters.filter(char => this.state.characters.indexOf(char) < this.state.pagination.registersPerPage);
        const pagination = { pages, currentPage: 1, registers };

        this.setState({ pagination: Object.assign(this.state.pagination, pagination) });
    }

    componentDidMount() {
        document.querySelector('.all-characters').classList.toggle('all-characters-selected');
        
        this.getAllCharacters();
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
                    {this.state.pagination.registers.map(char =>
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
                        <Paginator registersPerPage={8} handlePagination={this.handlePagination} registers={this.state.characters} />
                        : <div></div>
                    }
                </main>
            </div>
        );
    }
}