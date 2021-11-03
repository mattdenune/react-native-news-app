import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoriteScreen = () => {
  return (
    <View style={styles.container} >
      <Text>Favorite Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default FavoriteScreen;

