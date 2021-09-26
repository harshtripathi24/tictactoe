import React from "react";

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((gameHistory, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                onClick={() => moveTo(index)}
                className={`btn-move ${index === currentMove ? `active` : ``}`}
              >
                {index === 0 ? `Go to Game Start ` : `Move ${index}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
