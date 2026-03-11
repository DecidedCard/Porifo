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

    const borderColorMap: Record<string, string> = {
        black: "gray_5",
        gray2: "gray_2",
        success: "success",
        error: "alert",
    };
    const borderColor = color ? borderColorMap[color] ?? "gray_3" : "gray_3";

    const helperTextColor = color === "error" ? "text-alert" : "text-gray_4";

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
