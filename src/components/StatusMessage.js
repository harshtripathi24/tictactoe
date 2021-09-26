import React from "react";

const StatusMessage = ({ winner, current, noMoveLeft }) => {
  console.log(noMoveLeft);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{" "}
          <span className={winner === "X" ? `text-green` : `text-orange`}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoveLeft && (
        <>
          Next chance is: &nbsp;
          <span className={current.isXnext ? `text-green` : `text-orange`}>
            {current.isXnext ? `X` : `O`}
          </span>{" "}
        </>
      )}
      {!winner && noMoveLeft && (
        <>
          The Game Between <span className="text-green">X</span> and &nbsp;
          <span className="text-orange">O</span> Tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
