import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';


class App extends Component {
  state = {
    avatar:''
  }

  addAvatar  =()=>{

    ImagePicker.launchImageLibrary({}, response=>{
      
    })

    // ImagePicker.showImagePicker({
    //   title:'select an Avatar',
    //   takePhotoButtonTitle:'take a good one',
    //   chooseFromLibraryButtonTitle:'Really... old one'
    // },response =>{
    //   if(response.didCancel){
    //     console.warn('really ?')
    //   }else{if(response.error){
    //     console.warn(response.error)
    //   }else{
    //     this.setState({
    //       avatar: response.uri
    //     })
    //   }

    //   }
    // })

    
  }

  render(){
    return(
      <View style={styles.app}>
        <Text>Hello cam! :)</Text>
        <Image
          source = {{uri:this.state.avatar}}
          style = {styles.avatar}
        />
        <Button
          title="add avatar"
          onPress={()=> this.addAvatar()}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  app:{
    flex:1,
    backgroundColor:'#f2f2f2',
    justifyContent:'center',
    alignItems:'center',
  },
  avatar:{
    width:'100%',
    height:400,
  }
});

export default App;
