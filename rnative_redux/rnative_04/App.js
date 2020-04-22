import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {getArticles} from './src/actions';


class App extends Component {
  componentDidMount(){
    this.props.dispatch(getArticles());
  }
  render(){
    return (
      <View style={styles.main}>
        <Text>Hello World</Text>
      </View>
    );
  }
 
};

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#c2c2c2'
  }
});

function mapStateToProps(state){
  console.warn(state);
  return{
    articles : state.articles
  }
}
export default connect(mapStateToProps)(App);
