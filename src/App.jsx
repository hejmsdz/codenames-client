import React from 'react';
import { Provider } from 'react-redux';

import Game from './containers/Game';
import store from './store';

store.dispatch({
  type: 'START',
  words: [
    ['soul', 'pound', 'state', 'microscope', 'sub'],
    ['kid', 'mole', 'Europe', 'pitch', 'hawk'],
    ['chest', 'flute', 'triangle', 'ice cream', 'pass'],
    ['dwarf', 'change', 'life', 'satellite', 'rabbit'],
    ['thumb', 'cat', 'bar', 'novel', 'box'],
  ],
  team: 0,
  turn: 0,
  master: false,
});

export default () => (
  <Provider store={store}>
    <Game />
  </Provider>
);
