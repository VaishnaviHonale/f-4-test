export const addToHistory = (word) => {
  return {
    type: 'ADD_TO_HISTORY',
    payload: word,
  };
};
// other action creators for managing search history
