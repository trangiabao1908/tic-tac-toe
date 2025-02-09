import { Board, Player } from "src/App";

export const checkWinner = (board: Board): Player | null => {
  const lines = [
    // Check hàng ngang
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],
    // Check hàng dọc
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
    // Check hàng chéo
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]],
  ];

  const winningLine = lines.find(
    (line) => line[0] && line[0] === line[1] && line[1] === line[2]
  );
  return winningLine ? winningLine[0] : null;
};

export const checkDraw = (board: Board): boolean => {
  return board.every((cell) => cell !== null);
};
