const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      if (action.master) {
        return action.colors;
      }
      return action.words.map(row => row.map(() => null));
    case 'REVEAL':
      return state.map(
        (row, i) => row.map(
          (color, j) => (i === action.i && j === action.j) ? action.color : color,
        ),
      );
    default:
      return state;
  }
};
