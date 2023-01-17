import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeScreen from './src/HomeScreen';
import TitheScreen from './src/TitheScreen';
import HymnalScreen from './src/HymnalScreen';
import EventScreen from './src/EventScreen';
import DiscoverScreen from './src/DiscoverScreeen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{ headerShown: false }} name="HOME" component={HomeScreen} />
        <Tab.Screen options={{ headerShown: false }} name="TITHE" component={TitheScreen} />
        <Tab.Screen options={{ headerShown: false }} name="EVENT" component={EventScreen} />
        <Tab.Screen options={{ headerShown: false }} name="DISCOVER" component={DiscoverScreen} />
        <Tab.Screen options={{ headerShown: false }} name="HYMNAL" component={HymnalScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;