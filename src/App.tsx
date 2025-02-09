import Board from "@components/Board";
import PlayerInput from "@components/PlayerInput";
import ScoreBoard from "@components/ScoreBoard";
import { checkDraw, checkWinner } from "@utils/gameLogic";
import React, { useState } from "react";

export type Player = "X" | "O";
export type Board = (Player | null)[];

const initialBoard: Board = Array(9).fill(null);

const App: React.FC = () => {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | null>(null);
  const [draw, setDraw] = useState<boolean>(false);
  const [score, setScore] = useState<{ X: number; O: number }>({ X: 0, O: 0 });
  const [playerNames, setPlayerNames] = useState<{ X: string; O: string }>({
    X: "Player X",
    O: "Player O",
  });

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = board.map((cell, idx) =>
      idx === index ? currentPlayer : cell
    );

    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      setScore((prevScore) => ({
        ...prevScore,
        [newWinner]: prevScore[newWinner] + 1,
      }));
    } else if (checkDraw(newBoard)) {
      setDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
    setDraw(false);
  };

  const handleNameChange = (player: Player, name: string) => {
    setPlayerNames((prevNames) => ({
      ...prevNames,
      [player]: name.trimStart(),
    }));
  };
  return (
    <div className="min-h-screen max-w-full flex flex-col items-center mt-10">
      <div className="text-2xl font-bold mb-4">Tic Tac Toe</div>
      <div className="mb-4 flex flex-row gap-2">
        <PlayerInput
          player="X"
          name={playerNames.X}
          onNameChange={handleNameChange}
        />
        <PlayerInput
          player="O"
          name={playerNames.O}
          onNameChange={handleNameChange}
        />
      </div>
      <Board board={board} onClick={handleClick} />
      {winner && (
        <div className="text-xl font-semibold mt-4">
          Winner: {playerNames[winner]}
        </div>
      )}
      {draw && <div className="text-xl font-semibold mt-4">Draw!</div>}
      <div
        onClick={resetGame}
        className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white cursor-pointer"
      >
        Restart Game
      </div>
      <ScoreBoard playerNames={playerNames} score={score} />
    </div>
  );
};

export default App;
