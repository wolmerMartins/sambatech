import React, { Component } from 'react';

import Paginator from '../../components/Paginator';

import './style.css';

export default class Episode extends Component {
    render() {
        return (
            <div className="episodes-container">
                <h2>Episódios</h2>

                <section>
                    <article>
                        <span className="episode-name">
                            <h4>Ozymandias</h4>
                            <p>Season 5 - Episode 14</p>
                        </span>

                        <span>
                            <h5>Data de estréia:</h5>
                            <p>15/09/2013</p>
                        </span>

                        <span className="episode-characters">
                            <h5>Personagens</h5>
                            <p>Walter White</p>
                            <p>Jesse Pinkman</p>
                        </span>

                        <span>
                            <p>Skyler White</p>
                            <p>Walter White Jr.</p>
                        </span>
                    </article>
                    
                    <article>
                        <span className="episode-name">
                            <h4>Ozymandias</h4>
                            <p>Season 5 - Episode 14</p>
                        </span>

                        <span>
                            <h5>Data de estréia:</h5>
                            <p>15/09/2013</p>
                        </span>

                        <span className="episode-characters">
                            <h5>Personagens</h5>
                            <p>Walter White</p>
                            <p>Jesse Pinkman</p>
                        </span>

                        <span>
                            <p>Skyler White</p>
                            <p>Walter White Jr.</p>
                        </span>
                    </article>

                    <article>
                        <span className="episode-name">
                            <h4>Ozymandias</h4>
                            <p>Season 5 - Episode 14</p>
                        </span>

                        <span>
                            <h5>Data de estréia:</h5>
                            <p>15/09/2013</p>
                        </span>

                        <span className="episode-characters">
                            <h5>Personagens</h5>
                            <p>Walter White</p>
                            <p>Jesse Pinkman</p>
                        </span>

                        <span>
                            <p>Skyler White</p>
                            <p>Walter White Jr.</p>
                        </span>
                    </article>
                    
                    <article>
                        <span className="episode-name">
                            <h4>Ozymandias</h4>
                            <p>Season 5 - Episode 14</p>
                        </span>

                        <span>
                            <h5>Data de estréia:</h5>
                            <p>15/09/2013</p>
                        </span>

                        <span className="episode-characters">
                            <h5>Personagens</h5>
                            <p>Walter White</p>
                            <p>Jesse Pinkman</p>
                        </span>

                        <span>
                            <p>Skyler White</p>
                            <p>Walter White Jr.</p>
                        </span>
                    </article>

                    <article>
                        <span className="episode-name">
                            <h4>Ozymandias</h4>
                            <p>Season 5 - Episode 14</p>
                        </span>

                        <span>
                            <h5>Data de estréia:</h5>
                            <p>15/09/2013</p>
                        </span>

                        <span className="episode-characters">
                            <h5>Personagens</h5>
                            <p>Walter White</p>
                            <p>Jesse Pinkman</p>
                        </span>

                        <span>
                            <p>Skyler White</p>
                            <p>Walter White Jr.</p>
                        </span>
                    </article>
                    
                    <article>
                        <span className="episode-name">
                            <h4>Ozymandias</h4>
                            <p>Season 5 - Episode 14</p>
                        </span>

                        <span>
                            <h5>Data de estréia:</h5>
                            <p>15/09/2013</p>
                        </span>

                        <span className="episode-characters">
                            <h5>Personagens</h5>
                            <p>Walter White</p>
                            <p>Jesse Pinkman</p>
                        </span>

                        <span>
                            <p>Skyler White</p>
                            <p>Walter White Jr.</p>
                        </span>
                    </article>

                    <Paginator />
                </section>
            </div>
        );
    }
}