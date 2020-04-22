import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  Button, Easing
} from 'react-native';

class AnimTwo extends Component {
  constructor() {
    super();
    this.state = {
      redSquare: new Animated.Value(1)
    }

  }

  runAnimation = () => {
    Animated.spring(this.state.redSquare, {
      toValue: 0,
      duration: 3000,
    }).start();
  }
  render() {
    return (
      <View>
        <Animated.View
        style={{
          opacity:this.state.redSquare,
          // left: this.state.redSquare.interpolate({
          //   inputRange:[0,1],
          //   outputRange:[300,0]
          // })
          // transform:[{
          //   rotateX: this.state.redSquare.interpolate({
          //     inputRange:[0,0,5,1],
          //     outputRange:['0deg','180deg','0deg']
          //   })
          // }]
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
        <Animated.View
        style={{
          opacity:this.state.redSquare,
          font: this.state.redSquare.interpolate({
              inputRange:[0,0,5,1],
              outputRange:[20,5,30]
        })}}
        >
          <Text>Hello World</Text>
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

export default AnimTwo;
