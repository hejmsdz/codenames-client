import React from 'react';

export default ({ board, myTurn, onClick }) => (
  <table className={`board ${!myTurn && 'disabled'}`}>
    <tbody>
      {board.map((row, i) => (
        <tr key={i}>
          {row.map(({ word, color }, j) => (
            <td key={j} className={color}>
              {onClick && !color ? (
                <button
                  type="button"
                  className="transparent"
                  onClick={() => onClick(i, j)}
                >
                  {word}
                </button>
              ) : word}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
