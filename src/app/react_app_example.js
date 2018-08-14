import React, { Component } from 'react';
import Board from './components/Board/board';
import './react_app_example.css';

class ReactAppExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        };
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const currentSquare = current.squares.slice();
        if (this.calculateWinner(currentSquare) || currentSquare[i]) {
            return;
        }
        currentSquare[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: currentSquare}]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,});
    }

    jumpTo(moveNumber){
        this.setState({
            stepNumber: moveNumber,
            xIsNext: (moveNumber % 2) === 0
        });
    }

    render() {
        let status;
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const currentSquare = current.squares;
        const winner = this.calculateWinner(currentSquare);
        if (winner) {
            status = "Winner is " + winner;
        } else {
            status = 'Next player: '+ (this.state.xIsNext ? "X" : "O");
        }
        const moves = history.map((squares, moveNumber) => {
            const desc = moveNumber ?
                'Go to move#' + moveNumber :
                'Go to start';
            return (
                <li key = {moveNumber}>
                    <button onClick = {() => this.jumpTo(moveNumber)}>{desc}</button>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        onClick={(i) => this.handleClick(i)}
                        squares = {currentSquare}
                    />
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default ReactAppExample;