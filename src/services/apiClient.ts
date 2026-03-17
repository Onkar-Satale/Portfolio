import axios from 'axios';

const apiClient = axios.create({
  // prioritize production API URL if provided through Environment Variables, otherwise default to local
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export default apiClient;
