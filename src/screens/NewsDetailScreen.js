import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux';

import * as newsAction from "../redux/actions/newsAction";

const NewsDetailScreen = ({ route }) => {

  const dispatch = useDispatch();
  const {articleUrl} = route.params;

  const article = useSelector(state => state.news.articles.articles.find(article => article.url === articleUrl))
  
  const isFav = useSelector((state) =>
    state.news.favorites.some((article) => article.url === article.url)
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <View>
        <ImageBackground
          style={styles.image}
          source={{ uri: article.urlToImage }}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.author}>{article.author}</Text>
            <MaterialIcons
              name={isFav ? "favorite" : "favorite-border"}
              size={24}
              color="#72bcd4"
              onPress={() => {
                dispatch(newsAction.toggleFavorites(article.url));
              }}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{article.description}</Text>
      </View>
    </View>
  );
}

export default NewsDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  header: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: "100%",
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 24,
  },
  description: {
    fontFamily: "Ubuntu",
    fontSize: 15,
    margin: 10,
  },
  descriptionText: {
    fontSize: 20, 
    fontFamily: 'Ubuntu',
  },
  author: {
    fontFamily: 'Ubuntu',
    fontSize: 20,
    color: 'white',
  }
});
