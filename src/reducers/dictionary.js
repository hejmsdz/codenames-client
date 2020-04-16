const initialState = null;
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DICTIONARY':
      return action.dictionary;
    default:
      return state;
  }
};
