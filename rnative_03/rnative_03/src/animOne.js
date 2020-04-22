import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  Button, Easing
} from 'react-native';

class AnimOne extends Component {
  constructor() {
    super();
    this.state = {
      redSquare: new Animated.Value(1)
    }

  }

  // runAnimation =()=> {
  //   Animated.spring(this.state.redSquare, {
  //     toValue: { x: 100, y: 100 },
  //     duration:2000,
  //     delay:1000,
  //     easing:Easing.elastic(2)
  //   }).start();
  // }
  runAnimation = () => {
    Animated.spring(this.state.redSquare, {
      toValue: 0,
      duration: 3000,
      delay: 1000,
      // easing: Easing.elastic(2)
    }).start();
  }
  render() {
    return (
      <View>
        <Animated.View
        style={{
          opacity:this.state.redSquare

        }}
          // style={this.state.redSquare.getLayout()}
        // style={{
        //   left:this.redSquare.x,
        //   top:this.redSquare.y
        // }}
        >
          <View style={styles.square} >

          </View>

        </Animated.View>
        <Button
          title="run animation"
          onPress={this.runAnimation}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },

});

export default AnimOne;
