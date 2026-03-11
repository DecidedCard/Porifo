import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    onTypeClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    size?: "s" | "m" | "l" | "sm" | "md" | "big" | "extra";
    fontSize?: "xs" | "s" | "m" | "l" | "xs sm:s";
    border?: boolean | "none";
    color?: "black" | "gray3" | "primary" | "secondary" | "gray2" | "primarynone";
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
    const isFilled = border === "none" || border === false || border === undefined;
    const height =
        (size === "sm" && "h-[22px]") ||
        (size === "s" && "h-9") ||
        (size === "md" && "h-9") ||
        (size === "m" && "h-12") ||
        (size === "big" && "h-12") ||
        (size === "l" && "h-14") ||
        (size === "extra" && "h-14") ||
        "h-12";
    const fontsize =
        (!fontSize && "text-P6_M") ||
        (fontSize === "xs" && "text-P9_M") ||
        (fontSize === "s" && "text-P8_M") ||
        (fontSize === "m" && "text-P6_M") ||
        (fontSize === "l" && "text-P5_M") ||
        (fontSize === "xs sm:s" && "text-P9_M sm:text-P8_M");
    const col =
        (!color && isFilled && "bg-gray_3 text-white") ||
        (color === "gray2" && isFilled && "bg-gray_2 text-white") ||
        (color === "gray3" && isFilled && "bg-gray_3 text-white") ||
        (color === "black" && isFilled && "bg-black text-white") ||
        (color === "primary" && isFilled && "bg-primary_1 text-white") ||
        (color === "secondary" && isFilled && "bg-secondary_1 text-white") ||
        (color === "primarynone" && "text-primary_1") ||
        (!color && "border border-solid border-gray_3 text-gray_3") ||
        (color === "gray2" && "border border-solid border-gray_2 text-black") ||
        (color === "gray3" && "border border-solid border-gray_3 text-black") ||
        (color === "black" && "border border-solid border-black text-black") ||
        (color === "primary" && "border border-solid border-primary_1 text-primary_1") ||
        (color === "secondary" && "border border-solid border-secondary_1 text-secondary_1");

    const buttonClass = `flex items-center justify-center px-3 py-1 rounded-lg w-full ${height} ${fontsize} ${col} ${
        className || ""
    }`;

    return (
        <button onClick={onClick ? onClick : onTypeClick} className={buttonClass} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
