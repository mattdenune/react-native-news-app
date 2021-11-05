import { FETCH_ARTICLES, TOGGLE_FAVORITES } from "../actions/newsAction";

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
    case TOGGLE_FAVORITES: 
      const index = state.favorites.findIndex(article => article.url === action.payload);
      
      if (index >= 0) {
          // * Remove item from favorites
          const favorites = [...state.favorites];
          favorites.splice(index, 1);
          return {
            ...state,
            favorites,
          }
        } else {
        // * Item does not exist in favorites
        const article = state.articles.articles.find(article => article.url === action.payload);

        return {
          ...state,
          favorites: state.favorites.concat(article)
        }
      }

    default:
      return state;
  }
}