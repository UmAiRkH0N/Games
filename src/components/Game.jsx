import React, { useState } from 'react';
import Board from './Board';

const Game = ({ onWin }) => {
  const [boards, setBoards] = useState(Array(9).fill(null).map(() => Array(9).fill(null)));
  const [mainBoard, setMainBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState('Player1');
  const [currentBoard, setCurrentBoard] = useState(null);
  const [gameWinner, setGameWinner] = useState(null);

  const handleClick = (boardIdx, squareIdx) => {
    if (gameWinner || mainBoard[boardIdx] || boards[boardIdx][squareIdx]) return;

    const newBoards = boards.map((board, idx) =>
      idx === boardIdx ? board.map((val, i) => (i === squareIdx ? currentTurn : val)) : board
    );

    const newMainBoard = [...mainBoard];
    newMainBoard[boardIdx] = checkWinCondition(newBoards[boardIdx]);

    setBoards(newBoards);
    setMainBoard(newMainBoard);
    setCurrentBoard(newMainBoard[squareIdx] !== null ? null : squareIdx);

    const winner = checkWinCondition(newMainBoard);
    if (winner) {
      setGameWinner(winner);
      if (onWin) onWin(winner);
    } else {
      setCurrentTurn(currentTurn === 'Player1' ? 'Player2' : 'Player1');
    }
  };

  const checkWinCondition = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-5">
        {boards.map((board, idx) => (
          <Board
            key={idx}
            squares={board}
            onClick={(i) => handleClick(idx, i)}
            isActive={!gameWinner && (currentBoard === null || currentBoard === idx)}
            winner={mainBoard[idx]}
            currentTurn={currentTurn}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
