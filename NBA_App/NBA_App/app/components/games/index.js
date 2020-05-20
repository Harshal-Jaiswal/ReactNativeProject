
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import LogoTitle from '../../utils/logo';

class GamesComponent extends Component {
  static navigationOptions = {

    headerTitleAlign: 'center',
    headerTitle: () => (<LogoTitle />),
    headerStyle: {
      backgroundColor: '#001338'
    },
    headerTintColor: 'blue',
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>
          Games Component
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

export default GamesComponent;
