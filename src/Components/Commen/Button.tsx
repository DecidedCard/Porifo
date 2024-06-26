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
        (!fontSize && "text-base") ||
        (fontSize === "xs" && "text-xs sm:text-[6px]") ||
        (fontSize === "s" && "text-sm sm:text-[10px]") ||
        (fontSize === "m" && "text-base sm:text-[12px]") ||
        (fontSize === "l" && "text-lg sm:text-[16px]");
    const col =
        (!color && border === "none" && "bg-gray2 text-white") ||
        (color === "black" && border === "none" && "bg-black text-white") ||
        (color === "primary" && border === "none" && "bg-primary text-white") ||
        (color === "secondary" && border === "none" && "bg-secondary text-white") ||
        (!color && "border border-solid border-gray2 text-gray2") ||
        (color === "black" && "border border-solid border-black text-black") ||
        (color === "primary" && "border border-solid border-primary text-primary") ||
        (color === "secondary" && "border border-solid border-secondary text-secondary") ||
        (color === "primarynone" && "text-primary");

    const buttonClass = `flex items-center justify-center px-3 rounded-lg w-full ${height} ${fontsize} ${col} ${className}`;

    return (
        <button onClick={onClick ? onClick : onTypeClick} className={buttonClass} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
