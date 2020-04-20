import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet, Button, Image
} from 'react-native';
import LogoTitle from './logo';
import Logo from './images/logo.png';


class HomeScreen extends Component {
    // static navigationOptions =({navigation})=>{
    //     return{
    //         headerRight:()=>(
    //             <Button
    //                 title="BB"
    //                 onPress={()=>alert("boom")}
    //             />
    //         )
    //     }
    // }

    static navigationOptions = {
        drawerLabel: 'Notif',
        
        drawerIcon: () => {
            <Image
                source={Logo}
                style={{ width: 30, height: 30 }}

            />
        }
    }

    render() {
        const message = this.props.navigation.getParam('message', 'N/A');

        return (

            <View style={styles.mainView}>
                <Text>Home Screen</Text>
                <Text>{message}</Text>
                <Image
                    style={{ width: 30, height: 30 }}
                    source={Logo}
                />
                <Button
                    title='Open side drawer'
                    onPress={() => this.props.navigation.openDrawer()}
                />
                <Button
                    title='Go to Users'
                    onPress={() => this.props.navigation.navigate('Users', {
                        userId: 12,
                        userName: 'Fransis',
                        lastName: 'Jones'
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
