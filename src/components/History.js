import React from "react";

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((gameHistory, index) => {
        return (
          <li key={index}>
            <button
              type="button"
              onClick={() => moveTo(index)}
              style={{
                fontWeight: index === currentMove ? "bold" : "normal",
              }}
            >
              {index === 0 ? `Go to Game Start ` : `Move ${index}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
