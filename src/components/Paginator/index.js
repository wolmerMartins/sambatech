import React, { Component } from 'react';

import './style.css';

export default class Paginator extends Component {
    render() {
        return (
            <div className="paginator-container">
                <ul>
                    <button><li>1</li></button>
                    <button><li>2</li></button>
                    <button><li>3</li></button>
                    <button><li>4</li></button>
                </ul>
            </div>
        );
    }
}