import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet,
    Image,
    Button,
} from 'react-native';

class SettingsComponent extends Component {
    render() {
        return (
            <View>
                <Text>
                    Hello Settings </Text>
                <Button
                    title='Go to Users'
                    onPress={() => this.props.navigation.navigate('Users', {
                        userId: 12,
                        userName: 'Fransis',
                        lastName: 'Jones'
                    })} />

            </View>
        )
    }
}

export default SettingsComponent;