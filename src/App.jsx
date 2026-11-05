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
            <div className="mb-6 rounded-xl border border-slate-700 bg-slate-800 px-6 py-4 text-center font-mono text-xl font-bold uppercase tracking-widest text-cyan-400 shadow-lg">
                {status}
            </div>

            <div className="flex justify-center">
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

            <div className="flex justify-center">
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

            <div className="flex justify-center">
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
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];

    function handlePlay(newSquares) {
        setIsNext(!isNext);

        const nextHistory = [...history.slice(0, currentMove + 1), newSquares];

        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(move) {
        setCurrentMove(move);
        setIsNext(move % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;

        if (move > 0) {
            description = `Go to move # ${move}`;
        } else {
            description = `Start the game`;
        }
        return (
            <li key={move} className="mb-2 list-none">
                <button
                    onClick={() => jumpTo(move)}
                    className="w-full rounded-lg bg-slate-700 px-4 py-3 text-left font-mono text-sm font-semibold tracking-wide text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950"
                >
                    {description}
                </button>
            </li>
        );
    });

    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 py-10 font-mono text-white md:flex-row md:gap-16">
                <div className="mb-8 w-full max-w-sm md:mb-0">
                    <Board
                        isNext={isNext}
                        squares={currentSquares}
                        onPlay={handlePlay}
                    />
                </div>

                <div className="w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-800 p-5 shadow-xl">
                    <h2 className="mb-5 border-b border-slate-600 pb-3 font-mono text-xl font-bold uppercase tracking-widest text-cyan-400">
                        Game History
                    </h2>

                    <ol className="max-h-80 space-y-1 overflow-y-auto">
                        {moves}
                    </ol>
                </div>
            </div>
        </>
    );
}
