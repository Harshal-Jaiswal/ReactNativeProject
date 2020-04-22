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

  state = {
    MyContacts: [{ givenName: 'ddd' }]
  }

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
            Contacts.getAll((err, contacts) => {
              if (err) {
                throw err;
              }
              this.setState({
                MyContacts: contacts
              })
              // console.warn(contacts)
            })
          }
          else {
            // Handle

          }
        })
        .catch(err => {

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
  addContacts = () => {
    if (Platform.OS == 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        {
          'title': 'Allow to Contacts',
          'message': 'Allow to Contacts'
        }
      )
        .then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const nweContact = {
              emailAddresses: [{
                label: 'work',
                email: 'carl-jung@example.com',
              }],
              familyName: "JONES",
              givenName: "CARL",
              phoneNumbers: [{
                label: 'mobile',
                number: '(555) 555-5555',
              }]
            }

            Contacts.addContact(nweContact, (err) => {
              if (err) throw err;
              this.getContacts();
            })
          }
          else {
            // Handle

          }
        })
        .catch(err => {

        })
    }
  }

  getContacts = () => {

    this.requestContactPermission()
    // .then((didGet) => {
    //   if (didGet) {
    //     Contacts.getAll((err, contacts) => {
    //       if (err) {
    //         throw err;
    //       }
    //       console.warn(contacts)
    //     })
    //   } else {

    //     alert(' no contact permission')
    //   }
    // })
    // Contacts.getAll( (err, contacts ) => {
    //   if(err){
    //     throw err;
    //   }
    //   console.warn(contacts)
    // })
  }

  list = () => {
    return this.state.MyContacts.map((item, id) => {
      return (
        <View
          key={id}
        >
          <Text>{item.givenName}{item.familyName}</Text>
        </View>
      );
    });
  };

  openForm =()=>{
    const nweContact = {
      emailAddresses: [{
        label: 'work',
        email: 'carl-jung@example.com',
      }],
      familyName: "JONES",
      givenName: "ADAM",
      phoneNumbers: [{
        label: 'mobile',
        number: '(555) 555-5555',
      }]
    }

    Contacts.openContactForm(nweContact,(err)=>{
      if(err){
        console.warn(err)
      }
    })
  }

  render() {
    return (
      <View style={styles.app}>
        <ScrollView style={{ width: '100%' }}>
          {
            this.list()
          }

        </ScrollView>

        <Button
          title='Load Contacts'
          onPress={this.getContacts}
        />
        <Button
          title='Add Contacts'
          onPress={this.addContacts}
        />
        <Button
          title='Open Form'
          onPress={this.openForm}
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
