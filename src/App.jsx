import { useState } from "react";
import Square from "./components/Square";

export default function Board() {
    const [squares, setsquares] = useState(Array(9).fill(null));

    function clickedFunction() {
        console.log("Funciton working?");
    }

    return (
        <>
            <div className="flex">
                <Square value={squares[0]} onSquareClick={clickedFunction} />
                <Square value={squares[1]} />
                <Square value={squares[2]} />
            </div>

            <div className="flex">
                <Square value={squares[3]} />
                <Square value={squares[4]} />
                <Square value={squares[5]} />
            </div>

            <div className="flex">
                <Square value={squares[6]} />
                <Square value={squares[7]} />
                <Square value={squares[8]} />
            </div>
        </>
    );
}
