import React from "react";

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <div
      className="w-16 h-16 flex items-center justify-center border border-gray-400 cursor-pointer text-2xl"
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Square;
