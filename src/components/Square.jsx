import { useState } from "react";

export default function Square() {
    const [value, setValue] = useState(null);

    function clickedFunciton() {
        setValue("X");
    }

    return (
        <>
            <button
                className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg cursor-pointer"
                onClick={clickedFunciton}
            >
                {value}
            </button>
        </>
    );
}
