import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> News App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === "android" ? "#72bcd4" : "#ffffff",
    padding: 15,
    borderBottomColor: Platform.OS === "android" ? "#ffffff" : "#72bcd4",
    borderBottomWidth: 1,
  },
  title: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 20,
    color: Platform.OS === "android" ? "#ffffff" : "#72bcd4",
  },
});

export default Header
