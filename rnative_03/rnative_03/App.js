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
import AnimOne from './src/animTwo';

class App extends Component {

  
  render() {
    return (

      <View style={styles.app}>
        <AnimOne/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  app: {
    flex:1,
    backgroundColor: '#f2f2f2',
  },

});

export default App;
