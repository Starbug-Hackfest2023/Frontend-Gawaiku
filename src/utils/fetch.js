import axios from 'axios';

const BASE_URL = 'http://34.143.137.115:8080';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
