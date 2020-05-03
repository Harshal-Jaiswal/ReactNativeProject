import axios from 'axios';
import { SIGN_IN,SIGN_UP} from '../types';
import { SIGNIN, SIGNUP, FIREBASEURL} from '../../utils/misc';

export function signUp(data){
  const request = axios({
    method:'POST',
    url : SIGNUP,
    data : {
      email: data.email,
      password: data.password,
      returnSecureToken: true
    },
    header:{
      "Content-Type" : "application/json"
    }
  }).then(response =>{
    // console.warn('hii '+response.data);
    return response.data; 
  }).catch(error=>{
    // console.warn('byy '+error);
    return false
  });
  
  return {
    type: SIGN_IN,
    payload: request
  }
}

export function signIn(data){

  const request = axios({
    method:'POST',
    url : SIGNIN,
    data : {
      email: data.email,
      password: data.password,
      returnSecureToken: true
    },
    header:{
      "Content-Type" : "application/json"
    }
  }).then(response =>{
    // console.warn('hii '+response.data);
    return response.data; 
  }).catch(error=>{
    // console.warn('byy '+error);
    return false
  });

  return {
    type: SIGN_IN,
    payload:request
  }
}