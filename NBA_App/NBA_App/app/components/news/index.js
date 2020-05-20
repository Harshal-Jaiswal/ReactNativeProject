
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LogoTitle from '../../utils/logo';
import { connect } from 'react-redux';
import { getNews } from '../../store/actions/news_action';

class NewsComponent extends Component {
  static navigationOptions = {

    headerTitleAlign: 'center',
    headerTitle: () => (<LogoTitle />),
    headerStyle: {
      backgroundColor: '#001338'
    },
    headerTintColor: 'blue',
  }

  componentDidMount() {
    this.props.dispatch(getNews());
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#001338'
          barStyle='light-content'
        />
        <Text>
          News Component
        </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    News: state.News
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default connect(mapStateToProps)(NewsComponent);
