import React from 'react';
import { connect } from 'react-redux';

import Players from '../components/Players';
import Board from '../components/Board';

const Game = ({
  client,
  started,
  canStart,
  players,
  board,
  clickable,
  team,
  master,
  myTurn,
}) => (
  <main>
    {started ? (
      <React.Fragment>
        <Board
          board={board}
          myTurn={myTurn}
          master={master}
          onClick={clickable ? (i, j) => client.click(i, j) : null}
        />
        <p>
          Team {['red', 'blue'][team]}.
          {myTurn && 'Your turn.'}
          {clickable && <button onClick={() => client.pass()}>Pass</button>}
        </p>
      </React.Fragment>
    ) : (
      <Players
        players={players}
        canStart={canStart}
        team={team}
        onStart={() => client.start()}
        onSetTeam={team => client.setTeam(team)}
      />
    )}
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
        color: state.colors[i][j],
        revealed: state.revealed[i][j],
      }),
    ),
  ),
  clickable: !state.master && state.turn === state.me.team,
  team: state.me.team,
  started: state.turn >= 0,
  players: state.players,
  master: state.master,
  canStart: state.turn === -1 && readyTeams(state.players),
  myTurn: state.turn === state.me,
});
export default connect(mapStateToProps, null)(Game);
