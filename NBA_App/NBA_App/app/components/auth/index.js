
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class AuthComponent extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>
          Auth Login
        </Text>
       <Button 
         title='go'
         onPress={()=> this.props.navigation.navigate('App')}
       />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default AuthComponent;
