import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from "@expo/vector-icons";

import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsList"
        component={NewsListScreen}
        options={{
          title: "All News",
        }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetailScreen}
        options={{
          title: "News Details",
        }}
      />
    </Stack.Navigator>
  );
};

function FavoritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Favorites' component={FavoriteScreen} />
    </Stack.Navigator>
  )
}


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: () => {
            let iconName;
            if(route.name === 'Home') {
              iconName="home"
            } else if (route.name === 'Favorites') {
              iconName='favorite'
            }

            return 
          }
        })}
      >
        <Tabs.Screen
          name="Home"
          component={HomeNavigator}
          options={{ headerShown: false }}
        />
        <Tabs.Screen
          name="Favorites"
          component={FavoritesNavigator}
          options={{ headerShown: false }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;