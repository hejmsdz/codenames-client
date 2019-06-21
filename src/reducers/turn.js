const initialState = null;
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START':
    case 'REVEAL':
    case 'PASS':
      return action.turn;
    default:
      return state;
  }
};
