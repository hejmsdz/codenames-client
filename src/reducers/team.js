const initialState = null;
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return action.team;
    default:
      return state;
  }
};
