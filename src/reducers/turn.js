const initialState = null;
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return action.turn;
    case 'REVEAL':
      return action.turn;
    default:
      return state;
  }
};
