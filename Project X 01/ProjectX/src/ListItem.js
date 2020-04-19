import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    list = () => {
        return this.props.items.map((element, id) => {
            return (
                <TouchableOpacity
                    onPress={() => this.props.delete(element)}
                    key={id}
                    style={styles.listItem} >
                    <Text>{element}</Text>
                </TouchableOpacity>
            );
        });
    };

    render() {
        return <View style={styles.mainView} >{this.list()}</View>;
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: '100%',
    },
    listItem: {
        backgroundColor: '#cececece',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        marginTop: 5,

    }
});

export default ListItem;