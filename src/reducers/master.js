const initialState = false;
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return action.master;
    default:
      return state;
  }
};
