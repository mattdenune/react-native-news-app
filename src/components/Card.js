import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import * as newsAction from '../redux/actions/newsAction';

const Card = ({ navigation, title, image, description, url }) => {

  const dispatch = useDispatch();
  const isFav = useSelector(state => state.news.favorites.some(article => article.url === url));

  return (
    <TouchableOpacity onPress={() => navigation.navigate("NewsDetails")}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: image
                ? image
                : "https://betanews.com/wp-content/uploads/2016/01/Error-404-dark-clouds-warning-page-not-found-e1452851329452.jpg",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {title && title.length > 25 ? title.slice(0, 25) + "..." : title}
          </Text>
          <MaterialIcons
            name={isFav ? "favorite" : "favorite-border"}
            size={24}
            color="#72bcd4"
            onPress={() => {
              dispatch(newsAction.toggleFavorites(url));
            }}
          />
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            {description && description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  imageWrapper: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  titleWrapper: {
    height: "10%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 20,
    marginTop: 10,
  },
  description: {
    fontFamily: "Ubuntu",
    fontSize: 15,
    marginTop: 10,
  },
});

export default Card

