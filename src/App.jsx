import { useState } from "react";
import Square from "./components/Square";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function clickedFunction(i) {
        const newSquares = squares.slice();
        newSquares[i] = "X";
        setSquares(newSquares);
    }

    return (
        <>
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
