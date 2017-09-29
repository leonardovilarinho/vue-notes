import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://vue-notes-api.azurewebsites.net/',
  timeout: 10000,
  headers: {
	'Access-Control-Allow-Origin': '*',
  },
});