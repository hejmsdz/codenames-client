import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board';

const Game = ({
  board,
  clickable,
}) => (
  <main>
    <Board
      board={board}
      onClick={clickable ? (i, j) => console.log('clicked', {i, j}) : null}
    />
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
});
export default connect(mapStateToProps, null)(Game);
