import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    onTypeClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    size?: "sm" | "md" | "big" | "extra";
    border?: boolean;
    color?: "black" | "gray3" | "primary" | "secondary" | "gray2";
    disabled?: boolean;
}

const Button = ({ text, onClick, onTypeClick, size, border, color, disabled }: ButtonProps) => {
    const height =
        (size === "sm" && "h-[22px]") ||
        (size === "md" && "h-9") ||
        (size === "big" && "h-12") ||
        (size === "extra" && "h-14");

    const col =
        (color === "black" && border && "border border-solid border-black text-black") ||
        (color === "gray2" && border && "border border-solid border-gray-2 text-black") ||
        (color === "gray3" && border && "border border-solid border-gray-3 text-black") ||
        (color === "primary" && border && "border border-solid border-primary-1 text-primary-1") ||
        (color === "secondary" && border && "border border-solid border-secondary-1 text-secondary-1") ||
        (color === "black" && "bg-black text-white") ||
        (color === "gray2" && "bg-gray-2 text-white") ||
        (color === "gray3" && "bg-gray-3 text-white") ||
        (color === "primary" && "bg-primary-1 text-white") ||
        (color === "secondary" && "bg-secondary-1 text-white");

    const buttonClass = `flex items-center justify-center px-3 rounded-lg w-full ${height} ${col}`;

    return (
        <button onClick={onClick ? onClick : onTypeClick} className={buttonClass} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
