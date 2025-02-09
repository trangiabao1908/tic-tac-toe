import React from "react";

interface PlayerInputProps {
  player: "X" | "O";
  name: string;
  onNameChange: (player: "X" | "O", name: string) => void;
}

const PlayerInput: React.FC<PlayerInputProps> = ({
  player,
  name,
  onNameChange,
}) => {
  return (
    <input
      type="text"
      placeholder={`Player ${player} Name`}
      value={name}
      onChange={(e) => onNameChange(player, e.target.value)}
      className="mr-2 px-2 py-1 border rounded"
    />
  );
};

export default PlayerInput;
