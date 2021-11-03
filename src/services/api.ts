import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://app.rnters.com/api/',
});