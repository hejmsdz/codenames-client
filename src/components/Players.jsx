import React from 'react';

export default ({ players, canStart, onStart }) => (
  <React.Fragment>
    <table>
      <thead>
        <tr>
          <th>Team red</th>
          <th>Team blue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {[0, 1].map(team => (
            <td key={team}>
              <ul>
                {players.filter(player => player.team === team).map(({ name, master }) => (
                  <li key={name} className={master ? 'master' : null}>{name}</li>
                ))}
              </ul>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
    <button disabled={!canStart} onClick={onStart}>Start game</button>
  </React.Fragment>
);
