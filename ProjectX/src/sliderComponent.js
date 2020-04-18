import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider } from 'react-native';


class SliderComponent extends Component {

  render() {
    return (
      <View style={styles.mainView}>
      <Text>{this.props.sliderValue}</Text>
        <Slider
          value = {this.props.sliderValue}
          minimumValue = {10}
          maximumValue = {400}
          step={5}
          onValueChange ={(val)=>this.props.sliderChange(val)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    marginTop: 10,
    padding:10,
    backgroundColor:'#F2F2F2',
  },
});

export default SliderComponent;
