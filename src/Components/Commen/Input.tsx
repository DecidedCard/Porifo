import React from "react";

const Input = ({
    size,
    helperText,
    color,
    width,
    type,
    value,
    onChange,
}: {
    size?: string;
    helperText?: string;
    color?: string;
    width: number;
    type: string;
    value?: any;
    onChange?: any;
}) => {
    const height = size === "big" ? "h-14" : "h-9";

    const borderColor =
        (color === "black" && "zinc-500") ||
        (color === "success" && "green-300") ||
        (color === "error" && "red-400") ||
        (!color && "zinc-300");

    const helperTextColor = color === "error" ? "text-red-400" : "text-zinc-300";

    return (
        <div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder="Placeholder"
                className={`border-2 border-solid border-${borderColor} rounded-lg ${height} w-[${width}px] p-2 text-xl font-normal`}
            />
            {helperText && <p className={`${helperTextColor} mt-2 text-sm`}>{helperText}</p>}
        </div>
    );
};

export default Input;