import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';

class Input extends Component {
    state = {
        myText: ''
    }

    onChange = (event) => {
        this.setState({
            myText: event
        })
    }
    render() {
        return (
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={this.onChange}
                    value={this.state.myText}
                    multiline={true}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputWrapper:{
        width:'100%'
    },
    input: {
        width: '100%',
        backgroundColor: '#f2f2f2',
        marginTop: 20,
        fontSize:20,
        padding:10,
    }
})
export default Input;