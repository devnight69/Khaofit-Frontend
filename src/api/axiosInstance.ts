import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://www.ambula.tech/ambula',
  // baseURL: "http://13.127.112.149:9001/ambula",
  // baseURL: 'https://www.ambula.online/ambula',
  // baseURL: "http://localhost:9001/ambula",
});

export default axiosInstance;
