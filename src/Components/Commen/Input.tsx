import React from "react";

const Input = ({
    size,
    helperText,
    color,
    maxLength,
    name,
    pattern,
    type,
    value,
    onChange,
    placeholder,
}: {
    size?: string;
    helperText?: string;
    color?: string;
    maxLength?: number;
    name?: string;
    pattern?: string;
    type: string;
    value?: any;
    onChange?: any;
    placeholder?: string;
}) => {
    const height = size === "big" ? "h-14" : "h-9";

    const borderColor =
        (color === "black" && "gray_5") ||
        (color === "gray2" && "gray_2") ||
        (color === "success" && "success") ||
        (color === "error" && "alert") ||
        (!color && "gray_3");

    const helperTextColor = color === "error" ? "alert" : "gray_4";

    return (
        <div className="h-[50px]">
            <input
                type={type}
                value={value}
                name={name}
                pattern={pattern}
                onChange={onChange}
                maxLength={maxLength}
                placeholder={placeholder}
                className={`border border-solid border-${borderColor} rounded-lg ${height} w-full p-2 px-3 text-sm font-normal`}
            />

            {helperText && <p className={`${helperTextColor} text-sm`}>{helperText}</p>}
        </div>
    );
};

export default Input;
