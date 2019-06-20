import { combineReducers } from 'redux';

import team from './team';
import master from './master';
import turn from './turn';
import words from './words';
import colors from './colors';

export default combineReducers({
  team,
  master,
  turn,
  words,
  colors,
});
