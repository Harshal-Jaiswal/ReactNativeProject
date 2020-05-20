
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class ArticleComponent extends Component {
  static navigationOptions ={
    title: 'usr',
    
    headerStyle:{
        backgroundColor:'#f4511e'
    },
    headerTintColor:'blue',
    headerTitleStyle:{
        fontWeight:'bold',
        color:'green'
    }
}

  render() {
   
    return (
      <View style={styles.container}>
        <Text>
        Article Component
        </Text>
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

export default ArticleComponent;
