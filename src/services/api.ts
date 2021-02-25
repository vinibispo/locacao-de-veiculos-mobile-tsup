import axios from 'axios';

const api = axios.create({
  baseURL: 'batata',
});

export default api;
