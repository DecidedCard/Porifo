import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    size?: string;
    border?: string;
    color?: string;
    width: number;
}

// size s, m, l 3가지 존재 size작성하지 않을 경우 기본크기로 세팅.
// color 4가지 존재 작성하지 않은 기본 세팅으로 gray2 세팅 나머지 black, primary, secondary가 있음.
// border에 none을 작성할 경우 보더가 사라지고 백그라운드로 색을 칠함.

const Button: React.FC<ButtonProps> = ({ text, onClick, size, border, color, width }) => {
    const height = (!size && "h-6") || (size === "s" && "h-9") || (size === "m" && "h-12") || (size === "l" && "h-14");
    const col =
        (!color && border === "none" && "bg-gray2 text-white") ||
        (color === "black" && border === "none" && "bg-grayblack text-white") ||
        (color === "primary" && border === "none" && "bg-primary text-white") ||
        (color === "secondary" && border === "none" && "bg-secondary text-white") ||
        (!color && "border-2 border-solid border-gray2 text-gray2") ||
        (color === "black" && "border-2 border-solid border-grayblack text-grayblack") ||
        (color === "primary" && "border-2 border-solid border-primary text-primary") ||
        (color === "secondary" && "border-2 border-solid border-secondary text-secondary");

    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center px-3 rounded-lg w-[${width}px] ${height} ${col} `}
        >
            {text}
        </button>
    );
};

export default Button;
