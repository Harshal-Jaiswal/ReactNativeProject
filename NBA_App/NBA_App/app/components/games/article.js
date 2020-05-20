import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class GameArticleComponent extends Component {
  render() {
   
    return (
      <View style={styles.container}>
        <Text>
        Game Article Component
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

export default GameArticleComponent;
