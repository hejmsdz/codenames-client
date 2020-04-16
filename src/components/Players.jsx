import React from 'react';

export default ({ players, canStart, onStart, onSetTeam,  team }) => (
  <React.Fragment>
    <table className="players">
      <thead>
        <tr>
          <th>
            <button className={`join red ${team == 0 ? 'active' : ''}`} onClick={() => onSetTeam(0)}>Red</button>
          </th>
          <th>
            <button className={`join blue ${team == 1 ? 'active' : ''}`} onClick={() => onSetTeam(1)}>Blue</button>
          </th>
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
