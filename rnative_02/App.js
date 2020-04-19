import React, { Component} from 'react';
import {  View, Text,
  StyleSheet,
} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// npm install --save react-navigation react-navigation-stack

import HomeScreen from './src/home';
import UserScreen from './src/user';

const AppNavigator = createStackNavigator({
  Home:{
    screen: HomeScreen
  },
  Users :{ 
    screen: UserScreen
  }
},{
  initiaRouteName : 'Homes'
});

export default createAppContainer(AppNavigator);
