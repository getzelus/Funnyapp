import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View } from 'react-native';

import Top from './Top';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Favs from '../pages/Favs';
import Game from '../pages/Game';

const Stack = createStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  
        screenOptions={{
          header: (props) => <Top {...props} />
        }}>
      
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Favs" component={Favs} />
        <Stack.Screen name="Game" component={Game} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}