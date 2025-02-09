import React from "react";

interface ScoreBoardProps {
  playerNames: { X: string; O: string };
  score: { X: number; O: number };
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ playerNames, score }) => {
  return (
    <div className="mt-4">
      <div className="text-2xl font-medium text-center">Score</div>
      <div className="text-xl">
        {playerNames.X}: {score.X}
      </div>
      <div className="text-xl">
        {playerNames.O}: {score.O}
      </div>
    </div>
  );
};

export default ScoreBoard;
