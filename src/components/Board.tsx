import React from "react";
import Square from "@components/Square";

interface BoardProps {
  board: (string | null)[];
  onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => {
  return (
    <div className="grid grid-cols-3">
      {board.map((cell, index) => (
        <Square key={index} value={cell} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;
