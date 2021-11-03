import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewsList" >
        <Stack.Screen name="NewsList" component={NewsListScreen} />
        <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;