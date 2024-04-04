import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div className="bg-primary rounded-lg flex gap-2 items-center justify-center shrink-0 relative">
      <button onClick={onClick} className="text-white text-center leading-[32px] flex items-center justify-center">
        {text}
      </button>
    </div>
  );
};

export default Button;

  