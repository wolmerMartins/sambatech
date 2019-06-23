import React, { Component } from 'react';

import './style.css';

export default class Paginator extends Component {
    state = {
        pages: 0,
        charactersPerPage: 0,
        currentPage: 1,
        characters: []
    }

    setPagination = e => {
        this.setState({ currentPage: parseInt(e.target.innerText) });

        const charactersEnd = this.state.charactersPerPage * parseInt(e.target.innerText);
        const charactersStart = charactersEnd - this.state.charactersPerPage;

        const characters = this.props.registers.characters.filter(
            character => this.props.registers.characters.indexOf(character) >= charactersStart && this.props.registers.characters.indexOf(character) < charactersEnd
        );

        return this.state;
    }

    componentDidMount() {
        const pages = Math.ceil(this.props.registers.characters.length / this.props.charactersPerPage);

        this.setState({ charactersPerPage: this.props.charactersPerPage, pages });
    }

    render() {
        const pages = [];
        const start = this.state.currentPage + 3 <= this.state.pages ? this.state.currentPage : this.state.currentPage - ((this.state.currentPage + 3) - this.state.pages);
        const end = this.state.currentPage + 3 > this.state.pages ? this.state.pages : this.state.currentPage + 3;
        
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return (
            <div className="paginator-container">
                <ul>
                    <button><li>prev</li></button>
                {pages.map(page =>
                    <button key={page} onClick={e => this.props.handlePagination(this.setPagination(e))}><li>{page}</li></button>
                )}
                    <button><li>next</li></button>
                </ul>
            </div>
        );
    }
}