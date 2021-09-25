import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMoveLeft = current.board.every((el) => el !== null);
  console.log(noMoveLeft);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMoveLeft &&
        `Next chance is: ${current.isXnext ? `X` : `O`}`}
      {!winner && noMoveLeft && "The Game Between X and O Tied"}
    </h2>
  );
};

export default StatusMessage;
