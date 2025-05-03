import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { useAuthStore } from "../stores/auth.store";


const apiClient  = axios.create(
{
    baseURL: API_BASE_URL,
    withCredentials: true,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
})

// Request interceptor
apiClient.interceptors.request.use((config) => 
    {
        const { token } = useAuthStore.getState();

        if(token)
        {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
            // config.headers['Authorization'] = `Bearer ${token}`;
            
        }

        return config;
    },

    (error) => Promise.reject(error)
)

apiClient.interceptors.response.use(
    (response) => response,
    (error) => 
    {
        // Improved error handling
        if (error.response) 
        {
          console.error('API Error:', error.response.status, error.response.data);

          // if (error.response.status === 401) {
          //   window.location.href = "/login?expired=true";
          // }
          // else if   (error.response.status === 403) {
          //   window.location.href = "/login?expired=true";
          // }   
        } 
        else {
          console.error('Network/Request Error:', error.message);
        }
        return Promise.reject(error);
    }
);

// Debugging
// apiClient.interceptors.request.use(config => {
//     console.log('Request Config:', config);
//     return config;
//   });
  
//   apiClient.interceptors.response.use(response => {
//     console.log('Response:', response);
//     return response;
//   }, error => {
//     console.error('Full Error:', error);
//     return Promise.reject(error);
//   });

export default apiClient ;