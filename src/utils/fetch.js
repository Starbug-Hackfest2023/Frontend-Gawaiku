import axios from 'axios';

const BASE_URL = 'https://gawaikuapi-production.up.railway.app';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
