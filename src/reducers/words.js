const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return action.words;
    default:
      return state;
  }
};
