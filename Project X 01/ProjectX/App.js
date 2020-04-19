import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Nav from './src/Nav';
import Generator from './src/generator';
import ListItem from './src/ListItem';
import Input from './src/input';


class App extends Component {

  state = {
    appName : 'My Awesome App',
    random: [20, 837]
  }

  onAddRandom =()=>{
    const random = Math.floor(Math.random()*100)+1;
    this.setState( prevState =>{
      return{
        random:[...prevState.random, random]
      }
    })
  }

  onDeleteItems=(pos)=>{

    const newArray =this.state.random.filter((item, index)=>{
      return pos != item;
    })
    this.setState({
      random: newArray
    })
  }

  render() {
    return (
      <>
        <View style={styles.mainView}>
{/* 
          <Nav name ={this.state.appName}/>
          <View style={styles.basicView}> 
            <Text style={styles.basicText}>Hello World!</Text>
          </View>

          <View style={styles.basicView}> 
            <Text style={styles.basicText}>Hello World!</Text>
          </View>

          <View style={styles.basicView}> 
            <Text style={styles.basicText}>Hello World!</Text>
          </View>

          <Generator add={this.onAddRandom}/> 
          <ListItem items={this.state.random}
            delete={this.onDeleteItems}/> */}

            <Input/>
        </View >
      </>
    );
  }
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },

  basicView: {
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 5,
  
  },

  basicText:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 20,
    
  },

});

export default App;
