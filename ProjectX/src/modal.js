import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';


class ModalComponent extends Component {
  state = {
    modal: false
  }

  handleModel = () => {
    this.setState({ modal: !this.state.modal ? true : false })
  }
  render() {
    return (
      <View style={styles.modalComponent}>
        <Button
          title='open Model'
          onPress={this.handleModel}
        />
        <Modal
          visible={this.state.modal}
          animationType='slide'
        >
          <View style={{
            marginTop: 50,
            backgroundColor:'red'
          }}>
            <Text>My Modal</Text>
          </View>
          <Button
          title='close Model'
          onPress={this.handleModel}
        />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalComponent: {
    width: '100%',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F2F2F2',
  },
});

export default ModalComponent;
