import React, { Component } from 'react';
import {
  View, Text,
  StyleSheet,
  Image,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs'
// npm install --save react-navigation react-navigation-stack

import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import SlideMenu from './src/sideDrawer';
import Icon from './src/images/logo.png';
import Icon1 from './src/images/download.jpg';
import SettingsComponent from './src/settings';

const HomeStack = createStackNavigator({
  Home :{
    screen:HomeScreen
  },
  Users:{
    screen:UserScreen
  }
});

const OtherStack =createStackNavigator({
  Settings:{
    screen:SettingsComponent
  },
  Users:{
    screen:UserScreen
  }
})

const AppNavigator = createDrawerNavigator({
  Home:{
    screen:HomeStack
  },
  Settings:{
    screen:OtherStack
  }
})

// const AppNavigator = createBottomTabNavigator({
//   Home:{
//     screen:HomeStack
//   },
//   Settings:{
//     screen:OtherStack
//   }
// })

// const AppNavigator = createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: ({navigation}) => ({
//       tabBarIcon: ({ focused, horizontal }) => {
//         return <Image source={Icon} style={{ width: 30, height: 30 }} />
//       }
//     })
//   },
//   Users: {
//     screen: UserScreen,
//     navigationOptions: ({navigation}) => ({
//       tabBarIcon: ({ focused, horizontal }) => {
//         return <Image source={Icon1} style={{ width: 30, height: 30 }} />
//       }
//     })
//   },

// }, {
//   initialRouteName: 'Users',
//   tabBarOptions: {
//     // activeTintColor:'red',
//     // activeBackgroundColor:'blue',
//     // inactiveTintColor:'yellow',
//     // inactiveBackgroundColor:'grey',
//     showLabel: true,
//     style: {
//       backgroundColor: 'green'
//     },
//     allowFontScaling: false,

//     labelStyle: {
//       fontSize: 20,
//       color: 'white'
//     },
//   },
//   defaultNavigationOptions: (navigation) => ({


//     tabBarOnPress: ({ navigation, defaultHandler }) => {

//       if (navigation.state.key == 'Users') {
//         alert('Hello')
//         // check network connection, auth, etc
//         navigation.navigate('Users')
//       } else {
//         defaultHandler();
//       }
//     }
//   })
// })


// const AppNavigator = createDrawerNavigator({
//   Home: { screen: HomeScreen,
//     // navigationOptions:({navigation})=>({
//     //        drawerLabel:'super option'

//     //       }),
//    },
//   Users: { screen: UserScreen },
// }, {
//   contentComponent:SlideMenu,
//   drawerPosition: 'right',
//   drawerType: 'slide',
//   drawerWidth: 200,
//   contentOptions:{
//     createAppContainer:'blue'
//   }
// });

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions:({navigation})=>({
//       title: 'my jio',
//       headerTitle: LogoTitle
//     }),
//   },
//   Users: {
//     screen: UserScreen
//   }
// }, {
//   initiaRouteName: 'Homes',
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: '#f4511e'
//     },

//     headerTintColor: 'blue',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//       flex:1,
//       textAlign:'center'
//     }
//   },
//   mode:'card',
//   headerMode:'float'
// });

export default createAppContainer(AppNavigator);
