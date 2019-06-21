const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYERS':
      return action.players;
    default:
      return state;
  }
};
