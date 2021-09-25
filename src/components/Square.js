import React from "react";

const Square = ({ value, onClick, isWinningSquares }) => {
  return (
    <button
      className="square"
      type="button"
      onClick={() => onClick()}
      style={{ fontWeight: isWinningSquares ? "bold" : "normal" }}
    >
      {value}
    </button>
  );
};

export default Square;
