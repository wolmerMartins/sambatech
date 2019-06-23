import React, { Component } from 'react';

import prev from '../../assets/images/prev.png';
import next from '../../assets/images/next.png';

import './style.css';

export default class Paginator extends Component {
    state = {
        pages: 0,
        registersPerPage: 0,
        currentPage: 1,
        registers: []
    }

    nextPage = e => {
        return this.state.currentPage + 1;
    }

    prevPage = e => {
        return this.state.currentPage - 1;
    }

    findRegisters = page => {
        const registersEnd = this.state.registersPerPage * page;
        const registersStart = registersEnd - this.state.registersPerPage;

        const registers = this.props.registers.filter(
            register => this.props.registers.indexOf(register) >= registersStart && this.props.registers.indexOf(register) < registersEnd
        );

        return registers;
    }

    setPagination = async page => {
        const registers = this.findRegisters(page);

        await this.setState({ currentPage: page, registers });

        return this.state;
    }

    handlePagination = e => {
        const page = e === 1 ? e : e.target.className === 'prev' ? this.prevPage() : e.target.className === 'next' ? this.nextPage() : parseInt(e.target.innerText);

        return this.setPagination(page);
    }

    async componentDidMount() {
        const pages = Math.ceil(this.props.registers.length / this.props.registersPerPage);

        await this.setState({ registersPerPage: this.props.registersPerPage, pages });
        
        this.handlePagination(1);
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
                    <button className="prev" onClick={e => this.props.handlePagination(this.handlePagination(e))} disabled={this.state.currentPage === 1}><li className="prev"><img className="prev" src={ prev } alt="voltar para página anterior" /></li></button>
                {pages.map(page =>
                    <button className={page === this.state.currentPage ? "page-selected" : ""} key={page} onClick={e => this.props.handlePagination(this.handlePagination(e))}><li>{page}</li></button>
                )}
                    <button className="next" onClick={e => this.props.handlePagination(this.handlePagination(e))} disabled={this.state.currentPage === this.state.pages}><li className="next"><img className="next" src={ next } alt="ir para próxima página" /></li></button>
                </ul>
            </div>
        );
    }
}