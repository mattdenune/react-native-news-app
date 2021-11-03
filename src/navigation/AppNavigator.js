import React from 'react';
import { NavigationContainer } from '@react-navigation/native';;
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='NewsList' component={NewsListScreen} />
        <Stack.Screen name='NewsDetails' component={NewsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;