import { combineReducers } from 'redux';

import activeGames from './activeGames';
import players from './players';
import me from './me';
import master from './master';
import turn from './turn';
import words from './words';
import colors from './colors';
import revealed from './revealed';

export default combineReducers({
  activeGames,
  players,
  master,
  me,
  turn,
  words,
  colors,
  revealed,
});
