// IMPORTS
import api from './api';
import { IRequestError } from '@/interfaces/IError';
import { ILogin } from '@/interfaces/ILogin';
import { IUserInfo } from '@/interfaces/IUserInfo';

// VARIABLES
const TOKEN_KEY = 'authToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_NAME = 'userName';
const USER_EMAIL = 'userEmail';

// OBJECTS
export const authService = {

  //FUNCTIONS
  async login({ email, password }: ILogin) {
    try {
      const response = await api.post('api/login', {
        email,
        password
      });

      const token = response.data.token;
      const refreshToken = response.data.refreshToken;
      const user = response.data.dataUser;

      if(response.status === 200) {
        handleLoginSuccess(token, refreshToken, user);
      }  else {
        refreshToken(refreshToken);
      }

      return  response.status;
    } catch (error) {
      handleLoginFailure(error)
    }
  },
  async logout() {
    removeAuthToken();
  }
}

// FUNCTIONS
export async function refreshToken(refresh: string){
  const response = await api.post('api/refresh', {
    headers: {
      'Authorization': `Bearer ${refresh}`
    }
  });

  const token = response.data.token;
  const refreshToken = response.data.refreshToken;
  const user = response.data.dataUser;

  if(response.data.success) {
    handleLoginSuccess(token, refreshToken, user);
  }
}

export function setAuthToken(token: string, refreshToken?: string, user?: IUserInfo): void {
  localStorage.setItem(TOKEN_KEY, token);
  // Salvar como Http only cookie
  if(refreshToken){
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
  if(user){
    const { email, name } = user;

    localStorage.setItem(USER_NAME, name);
    localStorage.setItem(USER_EMAIL, email);
  }

  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export function getAuthToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeAuthToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function handleLoginSuccess(token: string, refreshToken?: string, user?: IUserInfo): void {
  setAuthToken(token, refreshToken, user);
}

export function handleLoginFailure(error: IRequestError): void {
  if (error.response && error.response.data && error.response.data.message) {
    alert('Error')
  }
}
