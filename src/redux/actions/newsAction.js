export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const fetchArticles = () => {
  return async dispatch => {

    // * logic to fetch data
    const results = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=834d05707fcf4fb4b8a7abd20a6d15fb')
    
    const resultsData = await results.json();

    dispatch({
      type: FETCH_ARTICLES,
      payload: resultsData,
    })
  }
}

export const toggleFavorites = (url) => {
  return {
    type: TOGGLE_FAVORITES,
    payload: url
  }
}