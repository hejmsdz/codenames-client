import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board';

const Game = ({
  client,
  board,
  clickable,
  team,
  myTurn,
}) => (
  <main>
    <Board
      board={board}
      onClick={clickable ? (i, j) => client.click(i, j) : null}
    />
    <p>
      Team {['red', 'blue'][team]}.
      {myTurn && 'Your turn.'}
      {clickable && <button onClick={() => client.pass()}>Pass</button>}
    </p>
  </main>
);

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
  myTurn: state.turn === state.team,
});
export default connect(mapStateToProps, null)(Game);