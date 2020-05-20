import {
  GET_NEWS
} from '../types';

import axios from 'axios';
import {FIREBASEURL} from '../../utils/misc';

export function getNews(){
  return{
    types:GET_NEWS,
    payload:{
      news:'something'
    }
  }
}