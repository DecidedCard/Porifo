import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    onTypeClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    size?: string;
    fontSize?: string;
    border?: string;
    color?: string;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    onTypeClick,
    size,
    fontSize,
    border,
    color,
    disabled,
    className,
}) => {
    const height = (!size && "h-6") || (size === "s" && "h-9") || (size === "m" && "h-12") || (size === "l" && "h-14");
    const fontsize =
        (!fontSize && "text-P6_M") ||
        (fontSize === "xs" && "text-P9_M") ||
        (fontSize === "s" && "text-P8_M") ||
        (fontSize === "m" && "text-P6_M") ||
        (fontSize === "l" && "text-P5_M");
    const col =
        (!color && border === "none" && "bg-gray_3 text-white") ||
        (color === "black" && border === "none" && "bg-black text-white") ||
        (color === "primary" && border === "none" && "bg-primary_1 text-white") ||
        (color === "secondary" && border === "none" && "bg-secondary_1 text-white") ||
        (!color && "border border-solid border-gray_3 text-gray_3") ||
        (color === "black" && "border border-solid border-black text-black") ||
        (color === "primary" && "border border-solid border-primary_1 text-primary_1") ||
        (color === "secondary" && "border border-solid border-secondary_1 text-secondary_1") ||
        (color === "primarynone" && "text-primary_1");

    const buttonClass = `flex items-center justify-center px-3 rounded-lg w-full ${height} ${fontsize} ${col} ${className}`;

    return (
        <button onClick={onClick ? onClick : onTypeClick} className={buttonClass} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
