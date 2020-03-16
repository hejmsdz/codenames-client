import { combineReducers } from 'redux';

import activeGames from './activeGames';
import players from './players';
import team from './team';
import master from './master';
import turn from './turn';
import words from './words';
import colors from './colors';
import revealed from './revealed';

export default combineReducers({
  activeGames,
  players,
  team,
  master,
  turn,
  words,
  colors,
  revealed,
});
