// src/api/axios.js
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com/api', // Replace with your API base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
