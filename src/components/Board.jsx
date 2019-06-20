import React from 'react';

export default ({ board, onClick }) => (
  <table className="board">
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
