const initialState = { room: null, name: null, team: null };
export default (state = initialState, action) => {
  switch (action.type) {
    case 'JOIN':
      return {
        room: action.room,
        name: action.playerName,
        team: null,
      };
    case 'PLAYERS':
      return Object.assign({}, state, {
        team: state.name ? action.players.find(player => player.name === state.name).team : null,
      });
    default:
      return state;
  }
};
