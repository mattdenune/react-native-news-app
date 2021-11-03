import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/news-dice.jpeg")}
          style={styles.image}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Dummy Title</Text>
        <MaterialIcons name="favorite-border" size={24} color="#72bcd4" />
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>Dummy Description</Text>
      </View>
    </View>
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
