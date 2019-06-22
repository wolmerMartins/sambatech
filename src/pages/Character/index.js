import React, { Component } from 'react';

import Paginator from '../../components/Paginator';

import './style.css';

export default class Character extends Component {
    render() {
        return (
            <div className="main-container">
                <main>
                    <div className="characters-header">
                        <h1>Personagens</h1>
                        <span className="filter-container">
                            <h3>Filtre por:</h3>
                            <button className="alive-button">Vivo</button>
                            <button className="dead-button">Morto</button>
                            <button className="all-characters">Todos</button>
                        </span>
                    </div>

                    <section className="characters">
                        <article>
                            <div className="character">
                                <span className="alive">Vivo</span>

                                <div className="character-info">
                                    <h2>Walter White</h2>
                                    <p className="birth-date">09/07/1958</p>
                                    <p>High School Chemistry Teacher, Meth King Pin</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="character">
                                <span className="dead">Morto</span>

                                <div className="character-info">
                                    <h2>Walter White</h2>
                                    <p className="birth-date">09/07/1958</p>
                                    <p>High School Chemistry Teacher, Meth King Pin</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="character">
                                <span className="alive">Vivo</span>

                                <div className="character-info">
                                    <h2>Walter White</h2>
                                    <p className="birth-date">09/07/1958</p>
                                    <p>High School Chemistry Teacher, Meth King Pin</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="character">
                                <span className="dead">Morto</span>

                                <div className="character-info">
                                    <h2>Walter White</h2>
                                    <p className="birth-date">09/07/1958</p>
                                    <p>High School Chemistry Teacher, Meth King Pin</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="character">
                                <span className="alive">Vivo</span>

                                <div className="character-info">
                                    <h2>Walter White</h2>
                                    <p className="birth-date">09/07/1958</p>
                                    <p>High School Chemistry Teacher, Meth King Pin</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="character">
                                <span className="dead">Morto</span>

                                <div className="character-info">
                                    <h2>Walter White</h2>
                                    <p className="birth-date">09/07/1958</p>
                                    <p>High School Chemistry Teacher, Meth King Pin</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="character">
                                <span className="alive">Vivo</span>

                                <div className="character-info">
                                    <h2>Walter White</h2>
                                    <p className="birth-date">09/07/1958</p>
                                    <p>High School Chemistry Teacher, Meth King Pin</p>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="character">
                                <span className="dead">Morto</span>

                                <div className="character-info">
                                    <h2>Walter White</h2>
                                    <p className="birth-date">09/07/1958</p>
                                    <p>High School Chemistry Teacher, Meth King Pin</p>
                                </div>
                            </div>
                        </article>
                    </section>

                    <Paginator />
                </main>
            </div>
        );
    }
}