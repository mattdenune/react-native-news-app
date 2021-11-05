import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import Card from '../components/Card';

const FavoriteScreen = ({ navigation }) => {

  const favorites = useSelector(state => state.news.favorites);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <Card
            navigation={navigation}
            title={item.title}
            image={item.urlToImage}
            description={item.description}
            url={item.url}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default FavoriteScreen;

