import { FETCH_ARTICLES } from "../actions/newsAction";

const initialState = {
  articles: [],
  favorites: [],
}

export default function(state=initialState, action) {

  switch(action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload
      }
    default:
      return state;
  }
}