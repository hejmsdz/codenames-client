import { combineReducers } from 'redux';

import players from './players';
import team from './team';
import master from './master';
import turn from './turn';
import words from './words';
import colors from './colors';

export default combineReducers({
  players,
  team,
  master,
  turn,
  words,
  colors,
});
