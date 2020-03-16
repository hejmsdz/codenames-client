const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return action.words.map(row => row.map(() => false));
    case 'REVEAL':
      return state.map(
        (row, i) => row.map(
          (revealed, j) => (i === action.i && j === action.j) ? true : revealed,
        ),
      );
    default:
      return state;
  }
};
