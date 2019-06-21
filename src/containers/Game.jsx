import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board';

const Game = ({
  client,
  started,
  canStart,
  players,
  board,
  clickable,
  team,
  myTurn,
}) => (
  <main>
    {started ? (
      <Board
        board={board}
        onClick={clickable ? (i, j) => client.click(i, j) : null}
      />
    ) : (
      <React.Fragment>
        <pre>{JSON.stringify(players, null, 2)}</pre>
        <button onClick={() => client.start()} disabled={!canStart}>Start game</button>
      </React.Fragment>
    )}

    <p>
      Team {['red', 'blue'][team]}.
      {myTurn && 'Your turn.'}
      {clickable && <button onClick={() => client.pass()}>Pass</button>}
    </p>
  </main>
);

const readyTeams = (players) => {
  return [0, 1].every(t => {
    const teamPlayers = players.filter(({ team }) => team === t);
    return teamPlayers.length >= 2 && teamPlayers.filter(({ master }) => master).length === 1;
  });
};

const mapStateToProps = state => ({
  board: state.words.map(
    (row, i) => row.map(
      (word, j) => ({
        word,
        color: state.colors[i][j]
      }),
    ),
  ),
  clickable: !state.master && state.turn === state.team,
  team: state.team,
  started: state.turn >= 0,
  players: state.players,
  canStart: state.turn === -1 && readyTeams(state.players),
  myTurn: state.turn === state.team,
});
export default connect(mapStateToProps, null)(Game);
