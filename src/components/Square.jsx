export default function Square({ value, onSquareClick }) {
    return (
        <>
            <button
                className="m-1.5 h-20 w-20 cursor-pointer rounded-xl border border-slate-600 bg-slate-800 font-mono text-4xl font-black tracking-wider text-cyan-400 shadow-md transition-all duration-200 hover:border-cyan-400 hover:bg-slate-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:h-24 sm:w-24"
                onClick={onSquareClick}
            >
                {value}
            </button>
        </>
    );
}
