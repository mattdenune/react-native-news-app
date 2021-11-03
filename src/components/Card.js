import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        
      </View>
      <View style={styles.titleWrapper}>
        <Text>Dummy Title</Text>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text>Dummy Description</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
  imageWrapper: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  titleWrapper: {},
  descriptionWrapper: {},
})

export default Card

