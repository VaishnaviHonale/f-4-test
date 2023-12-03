// const initialState = {
//   searchHistory: [],
// };

// const historyReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_HISTORY':
//       return {
//         ...state,
//         searchHistory: [...state.searchHistory, action.payload],
//       };
//     // other cases for managing search history
//     default:
//       return state;
//   }
// };

// export default historyReducer;




const initialState = {
  searchHistory: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_HISTORY':
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    case 'REMOVE_FROM_HISTORY':
      const updatedHistory = state.searchHistory.filter(
        (word) => word !== action.payload
      );
      return {
        ...state,
        searchHistory: updatedHistory,
      };
    // other cases for managing search history
    default:
      return state;
  }
};

export default historyReducer;
