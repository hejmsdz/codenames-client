import React from 'react';
import { connect } from 'react-redux';

const turns = {
  0: 'red',
  1: 'blue',
  '-1': 'not started',
}

function Admin({ activeGames }) {
  return (
    <table>
      <tr>
        <th>Room name</th>
        <th>Players</th>
        <th>Turn</th>
      </tr>
      {activeGames.map(game => (
        <tr key={game.room}>
          <td>{game.room}</td>
          <td>
            {game.players[0]}
            +
            {game.players[1]}
          </td>
          <td>{turns[game.turn]}</td>
        </tr>
      ))}
    </table>
  );
};

const mapStateToProps = state => ({
  activeGames: state.activeGames,
});

export default connect(mapStateToProps, null)(Admin);
