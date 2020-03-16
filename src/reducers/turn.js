const initialState = -1;
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START':
    case 'REVEAL':
    case 'PASS':
      return action.turn;
    case 'OVER':
      alert(`Team ${['red', 'blue'][action.winner]} wins!`);
      return -1;
    default:
      return state;
  }
};
