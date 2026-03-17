import axios from 'axios';

const apiClient = axios.create({
  // prioritize production API URL if provided through Environment Variables, otherwise default to Render backend
  baseURL: import.meta.env.VITE_API_URL || 'https://portfolio-2wyb.onrender.com/api',
});

export default apiClient;
