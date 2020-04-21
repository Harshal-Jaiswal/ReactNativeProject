import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Platform,
  Button,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Contacts from 'react-native-contacts';
import { PermissionsAndroid, requestMultiple } from 'react-native';

class App extends Component {

  async requestContactPermission() {
    if (Platform.OS == 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'Contacts',
          'message': 'Describing why I need to access contact information.'
        }
      )
        .then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
          }
          else {
            // Handle
            return false;
          }
        })
        .catch(err => {
          console.log('PermissionsAndroid', err)
        })
    }
    // if (Platform.OS === 'ios') {
    //   return true
    // } else {
    //   const granted = await PermissionsAndroid.requestMultiple([
    //     PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    //     PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
    //   ]);
    //   alert(granted['android.permission.READ_CONTACTS'])
    //   if (granted['android.permission.READ_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED
    //     && granted['android.permission.WRITE_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  }

  getContacts = () => {

    this.requestContactPermission().then((didGet) => {
      if (didGet) {
        Contacts.getAll((err, contacts) => {
          if (err) {
            throw err;
          }
          console.warn(contacts)
        })
      } else {

        alert(' no contact permission')
      }
    })
    Contacts.getAll( (err, contacts ) => {
      if(err){
        throw err;
      }
      console.warn(contacts)
    })
  }
  render() {
    return (
      <View style={styles.app}>
        <Button
          title='Load Contacts'
          onPress={this.getContacts}
        />
        <Text>Hello cam! :)</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default App;
