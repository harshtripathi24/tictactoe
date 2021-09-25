import React,{useState} from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';
import './Styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setIsXNext] = useState(false);
const  winner = calculateWinner(board);

const message = winner? `Congratulation! The winner is ${winner}` : `The next move is Player ${isXnext?'X':'O'}`

console.log(winner)

  const handleSquareClick = position => {
    if (board[position] || winner ) {
      return;
    }

    setBoard(() => {
      return board.map((square, pos) => {
        if (pos === position) {
          return isXnext ? 'X' : 'O';
        } else {
          return square;
        }
      });
    });
    setIsXNext(!isXnext);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
