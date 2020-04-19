import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,

} from 'react-native';

const generate = (props) => {
    return (
        <TouchableHighlight
        style={styles.generate}
        onPress={()=> props.add()}
            // onPress ={()=> alert("Triggered press")}
            // onLongPress = {() => alert("Triggered long press")}
            // onPressOut = {()=> alert("on press out")}
            // delayLongPress = {3000}
        >
            <View >
                <Text>Click me</Text>
            </View>
        </TouchableHighlight>

    )
}

// const generate =() =>{
//     return (
//         <Button 
//         title = "Add One"
//         onPress = {()=> alert("Trigger")}
//         />
//     )
// }

const styles = StyleSheet.create({
    generate: {
        backgroundColor: '#D9E3F0',
        alignItems: 'center',
        padding: 10,
        width: '100%',

    }
});

export default generate;