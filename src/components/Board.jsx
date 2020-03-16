import React from 'react';

export default ({ board, myTurn, master, onClick }) => (
  <table className={`board ${!myTurn && 'disabled'}`}>
    <tbody>
      {board.map((row, i) => (
        <tr key={i}>
          {row.map(({ word, color, revealed }, j) => (
            <td key={j} className={`${color} ${(master && revealed) ? 'revealed' : ''}`}>
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
