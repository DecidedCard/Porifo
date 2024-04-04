import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    size?: string;
    border?: string;
    color?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, size, border, color }) => {
    const height = (!size && "h-6") || (size === "s" && "h-9") || (size === "m" && "h-12") || (size === "l" && "h-14");
    const col =
        (!color && "-gray2") ||
        (color === "grayblack" && "-grayblack") ||
        (color === "primary" && "-primary") ||
        (color === "secondary" && "-secondary");

    const bor = border === "none" ? "bg" : "border-2 border-solid border";
    const txt = border === "none" ? "text-white" : `text${col}`;

    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center px-3 rounded-lg ${height} ${bor}${col} ${txt}`}
        >
            {text}
        </button>
    );
};

export default Button;
