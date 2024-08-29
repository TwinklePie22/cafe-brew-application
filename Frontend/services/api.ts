import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


// Add a request interceptor to include the JWT token in requests
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  export const login = (email: string, password: string) => 
    api.post('/user/login', { email, password });
  
  export const signup = (userData: { email: string; password: string }) => 
    api.post('/user/signup', userData);
 
 
  
  

  export const getAllUsers = () => api.get('/user/get');

  export const updateUser = (userData: { email: string; role: string }) =>
    api.post('/user/update', userData);
  
  export const changePassword = (passwordData: { oldPassword: string; newPassword: string }) =>
    api.post('/user/changePassword', passwordData);
  
  export const forgotPassword = (email: string) =>
    api.post('/user/forgotPassword', { email });  

export const getProducts = () => api.get('/products');
export const createProduct = (product: any) => api.post('/products', product);
export const addProduct =(product: any) => api.put('/products', product);
export const updateProduct =(product: any) => api.patch('/products', product);
export const deleteProduct =(product: any) => api.delete('/products', product);

export default api;
