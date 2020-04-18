import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import ListView from './src/listView';
import SliderComponent from './src/sliderComponent';
import Nav from './src/nav';
import ModelComponent from './src/modal';


class App extends Component {
  state = {
    sliderValue: 300
  }

  sliderChange = (val) => {
    this.setState({
      sliderValue: val
    })
  }
  render() {
    return (
      <View style={styles.appView}>
        <Nav appName={'My Cool App'} />
        <View style={styles.mainView}>

          <ScrollView style={{ width: '100%' }}>
            <ListView />
            <SliderComponent sliderValue={this.state.sliderValue} sliderChange={this.sliderChange} />
            <Image
              source={{ uri: 'https://picsum.photos/400/400' }}
              style={{
                width: '100%',
                marginTop: 20,
                height: this.state.sliderValue
              }}

              resizeMode='contain'

            />
            <ModelComponent />
          </ScrollView>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  mainView: {
    flex: 1,
    width: '100%',
    padding: 5,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image: {
    width: '100%',
    marginTop: 20,
  }
});

export default App;
