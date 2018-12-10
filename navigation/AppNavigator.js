import React from 'react';
import { createStackNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';
import HomeScreen from "../screens/HomeScreen";
import NewScreen from "../screens/NewScreen";
import ExerciseScreen from "../screens/ExerciseScreen";

export default createStackNavigator({
  // Main: MainTabNavigator,
  Home: HomeScreen,
  New: NewScreen,
  Exercise: ExerciseScreen
});