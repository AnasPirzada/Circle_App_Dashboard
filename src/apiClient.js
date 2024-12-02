import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://cricle-app.azurewebsites.net', // Replace with your API base URL
});

apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('Token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default apiClient;
