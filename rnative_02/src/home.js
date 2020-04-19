import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet, Button
} from 'react-native';

class HomeScreen extends Component {
    render() {
        return (

            <View style={styles.mainView}>
                <Text>Home Screen</Text>
                <Button
                    title='Go to Users'
                    onPress={() => this.props.navigation.navigate('Users',{
                        userId:12,
                        userName:'Fransis',
                        lastName:'Jones'
                    })} />
            </View>

        );
    }
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: '100%',
        backgroundColor: '#c2c2c2',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HomeScreen;
