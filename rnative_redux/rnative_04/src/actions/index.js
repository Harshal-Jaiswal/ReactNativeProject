import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/posts'

export function getArticles(){
  const request = axios.get(URL)
  .then(response => response.data)

    return{
      type: 'GET_ARTICLES',
      payload : request 
    }

}