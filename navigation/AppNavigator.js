import React from 'react';
import { createStackNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';
import HomeScreen from "../screens/HomeScreen";
import NewScreen from "../screens/NewScreen";
import WorkoutScreen from "../screens/WorkoutScreen";

export default createStackNavigator({
  // Main: MainTabNavigator,
  Home: HomeScreen,
  New: NewScreen,
  Workout: WorkoutScreen
});