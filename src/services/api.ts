import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';


interface AuthResponse {
  token: string;
  refreshToken: string;
}
const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if(error.response?.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');

      if(refreshToken) {
        const { data } = await api.post<AuthResponse>(
          'api/refresh',
          {
            refreshToken
          }
        );

        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);

        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${data.token}`
      }
    }

    return Promise.reject(error);
  }
)

export default api;
