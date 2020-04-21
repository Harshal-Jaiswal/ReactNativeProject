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
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

class App extends Component {


  render() {
    return (
      <View style={styles.app}>

        <Icon.Button
          name="facebook-box"
          backgroundColor='#3b5998'
          onPress={()=>alert('touched')}
          >
            <Text style={{color:'#fff', fontSize:15}}>Login with facebook</Text>
          </Icon.Button>
          <Icon.Button
          name="google"
          backgroundColor='red'
          onPress={()=>alert('touched')}
          >
            <Text style={{color:'#fff', fontSize:15}}>Login with Google</Text>
          </Icon.Button>
        <TouchableOpacity
          onPress={()=>alert('touched')}
        >

          <Icon
            name="google-home"
            size={60}
            color='red'
            style={{

            }}
          />

        </TouchableOpacity>
        <Text>Hello cam! :)</Text>
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

});

export default App;
