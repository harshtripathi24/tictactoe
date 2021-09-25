import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./helper";
import "./Styles/root.scss";

const newGame = [{ board: Array(9).fill(null), isXnext: true }];
const App = () => {
  const [history, setHistory] = useState(newGame);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const { winner, winningSquares } = calculateWinner(current.board);
  console.log(winningSquares);

  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory((prev) => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXnext ? "X" : "O";
        } else {
          return square;
        }
      });
      return prev.concat({ board: newBoard, isXnext: !last.isXnext });
    });
    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };
  const onNewGame = () => {
    setHistory(newGame);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button type="button" onClick={() => onNewGame()}>
        Start New Game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
