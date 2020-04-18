import React, { Component } from 'react';

import { View, Text, StyleSheet,Picker } from 'react-native';

class ListView extends Component {
  state = {
    language: 'English'
  }
  render() {
    return (
      <View style={styles.listView}>
        <Picker
          style={{ width :'100%', alignItems:'center', justifyContent:'center' }}
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
        >
          <Picker.Item label='Spanish' value='Spanish' />
          <Picker.Item label='English' value='English' />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    width: '100%',
    marginTop:5,
    backgroundColor: '#cecece',
    alignItems: 'center',
  },
});

export default ListView;
