import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Input from '../../utils/forms/input';

class AuthForm extends Component {
  state = {
    type: 'Login',
    action: 'Login',
    actionMode: 'I want to Register',
    hasErrors: true,
    form: {
      email: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isRequired: true,
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isRequired: true,
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          confirmPass: 'password'

        }
      },
    }
  }

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false
    });

    let formCopy = this.state.form;
    formCopy[name].value = value;

    this.setState({
      form: formCopy
    })
  }
  formHasErrors =()=>(
    this.state.hasErrors ?
    <View style={styles.errorContainer}>
      <Text style={styles.errorLabel}> Oops, check your info</Text>
    </View>
    : null
  )

  confirmPassword = () => {
    if(this.state.type !='Login' ){
    return(
      <Input
          placeholder="Confirm your password"
          placeholderTextColor="#cecece"
          autoCapitalize={"none"}
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          onChangeText={value => this.updateInput("password", value)}
          // overrideStyle = {{}}
          secureTextEntry
        />
    )}

  }

  render() {
    return (
      <View>
        <Input
          placeholder="Enter email"
          placeholderTextColor="#cecece"
          autoCapitalize={"none"}
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          keyboardType={'email-address'}
          onChangeText={value => this.updateInput("email", value)}
        // overrideStyle = {{}}
        />

        <Input
          placeholder="Enter your password"
          placeholderTextColor="#cecece"
          autoCapitalize={"none"}
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          onChangeText={value => this.updateInput("password", value)}
          // overrideStyle = {{}}
          secureTextEntry
        />
        {this.confirmPassword()}
        {this.formHasErrors()}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  errorContainer:{
marginBottom:10,
marginTop:30,
padding:10,
backgroundColor:'#f44336'
  },
  errorLabel:{
    color:'#fff',
    textAlignVertical:'center',
    textAlign:'center'
  }
})
export default AuthForm;
