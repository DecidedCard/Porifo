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

    const bor = border === "none" ? `bg-slate-950` : `border-2 border-solid border-slate-950`;

    const col = (color === "black" && "black") || (color === "gray" && "gray");
    return (
        <button onClick={onClick} className={`flex items-center justify-center  px-3 rounded-lg ${height} ${bor} `}>
            {text}
        </button>
    );
};

export default Button;
