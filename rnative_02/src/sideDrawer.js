import React, { Component } from 'react';
import {
    View, Text, Image,
    StyleSheet, ScrollView
} from 'react-native';
import Logo from './images/logo.png';
import { NavigationActions } from 'react-navigation';

class SlideView extends Component {

    navigateToScreen = (route) => {
    
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        
        this.props.navigation.dispatch(navigateAction)
        
        // this.props.navigation.navigate(route)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.navImgCont}>
                        <Image
                            source={Logo}
                            style={
                                { width: 50, height: 50 }
                            }
                        />
                    </View>
                    <View>
                        <Text style={styles.HedingStyle}>
                            Section 1
                        </Text>

                        <View style={styles.navSections}>
                            <Text style={styles.navItem}
                                onPress={() => this.navigateToScreen('Home')}>

                                Home
                        </Text>
                            <Text style={styles.navItem}
                                onPress={() => this.navigateToScreen('Users')}>

                                Users
                        </Text>

                        </View>
                    </View>
                </ScrollView>
                <View>
                    <Text>Copyright@hj</Text>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    navImgCont: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    HedingStyle: {
        color: '#fff',
        backgroundColor: '#04b6ff',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    navSections: {
        backgroundColor: 'black',
    },
    navItem: {
        padding: 10,
        color: 'white'
    }
})
export default SlideView;