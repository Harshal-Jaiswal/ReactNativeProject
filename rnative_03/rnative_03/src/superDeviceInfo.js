import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Button,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import SuperText from './src/widgets/superText';
import DeviceInfo from  'react-native-device-info';

class App extends Component {

  
  render() {
    console.warn(DeviceInfo.getBatteryLevel())
    return (

      <View style={styles.app}>
        <SuperText style={styles.rogue}>
          Hello this is my super text 
          {
            Platform.OS ==='ios' ?
            ' Welcome to ios':
            ' Welcome to Android'
          }
        </SuperText>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rogue:{
    ...Platform.select({
      ios:{
        backgroundColor:'red',
      
      },
      android:{
        backgroundColor:'black'
      }
    })
  }

});

export default App;
