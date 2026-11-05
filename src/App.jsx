import { useState } from "react";
import Square from "./components/Square";

function Board({ isNext, squares, onPlay }) {
    const winner = calculateWinners(squares);
    let status;

    if (winner) {
        status = `winner : ${winner}`;
    } else {
        status = "Next Player " + (isNext ? "X" : "O");
    }

    function clickedFunction(i) {
        if (squares[i] || calculateWinners(squares)) {
            return false;
        }

        const newSquares = squares.slice();

        if (isNext) {
            newSquares[i] = "X";
        } else {
            newSquares[i] = "O";
        }

        onPlay(newSquares);
    }

    function calculateWinners(squares) {
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

            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    }

    return (
        <>
            <div>{status}</div>
            <div className="flex">
                <Square
                    value={squares[0]}
                    onSquareClick={() => clickedFunction(0)}
                />
                <Square
                    value={squares[1]}
                    onSquareClick={() => clickedFunction(1)}
                />
                <Square
                    value={squares[2]}
                    onSquareClick={() => clickedFunction(2)}
                />
            </div>

            <div className="flex">
                <Square
                    value={squares[3]}
                    onSquareClick={() => clickedFunction(3)}
                />
                <Square
                    value={squares[4]}
                    onSquareClick={() => clickedFunction(4)}
                />
                <Square
                    value={squares[5]}
                    onSquareClick={() => clickedFunction(5)}
                />
            </div>

            <div className="flex">
                <Square
                    value={squares[6]}
                    onSquareClick={() => clickedFunction(6)}
                />
                <Square
                    value={squares[7]}
                    onSquareClick={() => clickedFunction(7)}
                />
                <Square
                    value={squares[8]}
                    onSquareClick={() => clickedFunction(8)}
                />
            </div>
        </>
    );
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [isNext, setIsNext] = useState(true);

    const currentSquares = history[history.length - 1];

    function handlePlay(newSquares) {
        setIsNext(!isNext);
        setHistory([...history, newSquares]);
    }

    return (
        <>
            <div>
                <Board
                    isNext={isNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div>
                <ol>{/*TBD*/}</ol>
            </div>
        </>
    );
}
