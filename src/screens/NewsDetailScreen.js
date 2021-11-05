import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const NewsDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}></Text>
      </View>
      <View>
        <ImageBackground style={styles.image}>
          <Text style={styles.author}></Text>
          <MaterialIcons/>
        </ImageBackground>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}></Text>
      </View>
    </View>
  )
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
