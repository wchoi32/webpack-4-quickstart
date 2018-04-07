// Takes two parameter: current state and action
// Reducers produce state (state must be from reducers)
import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;

// state.articles.push(action.payload) is impure.alters orig arr
//There are two key points for avoiding mutations in Redux:
//Using concat(), slice(), and …spread for arrays
//Using Object.assign() and …spread for objects