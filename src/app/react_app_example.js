import React, { Component } from 'react';
import Board from './components/Board/board';
import './react_app_example.css';

class ReactAppExample extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <div>{/* TODO */}</div>
                </div>
            </div>
        );
    }
}

export default ReactAppExample;