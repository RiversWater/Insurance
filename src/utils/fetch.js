import axios from 'axios';

let $http = axios.create({
  baseURL: 'http://m.dev.luckybao365.com/api/',
  responseType: 'json',
  headers:{
      'Content-Type':'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
      data = JSON.stringify(data);
      return data;
  }]
});



export default $http;
