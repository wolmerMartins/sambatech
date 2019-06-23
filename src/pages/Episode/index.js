import React, { Component } from 'react';
import api from '../../services/api';

import utils from '../../utils/Utils';

import Paginator from '../../components/Paginator';

import './style.css';

export default class Episode extends Component {
    state = {
        episodes: [],
        pagination: {
            pages: 0,
            registersPerPage: 6,
            currentPage: 1,
            registers: []
        }
    }

    getAllEpisodes = async e => {
        const episodes = await api.get('episodes');

        this.setState({ episodes: episodes.data });
    }

    setPagination = e => {
        const episodes = {
            registers: this.state.episodes.filter(episode => this.state.episodes.indexOf(episode) < this.state.pagination.registersPerPage)
        };
        this.setState({ pagination: Object.assign(this.state.pagination, episodes) });
    }

    handlePagination = async response => {
        const pagination = await response;
        this.setState({ pagination });
    }

    async componentDidMount() {
        await this.getAllEpisodes();

        this.setPagination();
        console.log(this.state);
    }

    render() {
        return (
            <div className="episodes-container">
                <h2>Episódios</h2>

                <section>
                    {this.state.pagination.registers.map(episode =>
                        <article key={episode.episode_id}>
                            <span className="episode-name">
                                <h4>{episode.title}</h4>
                                <p>Season {episode.season} - Episode {episode.episode}</p>
                            </span>

                            <span>
                                <h5>Data de estréia:</h5>
                                <p>{utils.formatDate(episode.air_date)}</p>
                            </span>

                            <span className="episode-characters">
                                <h5>Personagens</h5>
                                {episode.characters.map(char =>
                                    <p key={char}>{char}</p>
                                )}
                            </span>
                        </article>
                    )}

                    {
                        this.state.episodes.length > 0 ?
                        <Paginator registersPerPage={6} handlePagination={this.handlePagination} registers={this.state.episodes} /> : <div></div>
                    }
                </section>
            </div>
        );
    }
}