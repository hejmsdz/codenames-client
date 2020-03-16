const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ACTIVE_GAMES':
      return action.activeGames;
    case 'TURN_CHANGE':
      return state.map(game => (game.room === action.room) ? Object.assign({}, game, { turn: action.turn }) : game);
    default:
      return state;
  }
};
