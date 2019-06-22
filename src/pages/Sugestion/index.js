import React, { Component } from 'react';

import './style.css';

export default class Sugestion extends Component {
    state = {
        yourname: '',
        message: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="sugestion-container">
                <h2>Envie sua sugestão</h2>

                <form>
                    <input type="text" value={this.state.yourName} onChange={this.handleChange} name="yourname" placeholder="Seu nome" />
                    <textarea value={this.state.sugestionMessage} onChange={this.handleChange} name="message" placeholder="Mensagem" />
                    <input type="submit" value="Enviar sugestão" />
                </form>
            </div>
        );
    }
}