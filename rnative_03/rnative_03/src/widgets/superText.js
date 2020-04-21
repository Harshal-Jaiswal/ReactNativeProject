import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

const SuperText = (props) => {
  return (
    <Text {...props}
      style={[styles.sText,props.style]}

    >
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  sText: {
    backgroundColor: 'blue',
    fontSize: 20,
    color: 'white',
    padding: 10,
    width: 300
  },

});

export default SuperText;