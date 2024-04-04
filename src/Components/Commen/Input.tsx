import React from "react";

const Input = () => {
    return (
        <div>
            <input
                placeholder="Placeholder"
                className="border border-solid border-slate-300 rounded-xl h-14 w-80 p-2 text-xl font-normal"
            />
            <p className="text-slate-300">helper text</p>
        </div>
    );
};

export default Input;
