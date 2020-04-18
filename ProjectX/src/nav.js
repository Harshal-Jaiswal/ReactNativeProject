import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider } from 'react-native';


class Nav extends Component {
  render(){
    return(
      <View style={styles.nav}>
        <Text>
          {this.props.appName}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  nav:{
    width:'100%',
    padding:10,
    backgroundColor: '#d6c3eb',
    alignItems:'center',
  }
})

export default Nav;