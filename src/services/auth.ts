// IMPORTS
import api from './api';
import { IRequestError } from '@/interfaces/IError';
import { ILogin } from '@/interfaces/ILogin';

// VARIABLES
const TOKEN_KEY = 'authToken';

// OBJECTS
export const auth = {

  //FUNCTIONS
  async login({ email, password }: ILogin): Promise<void> {
    try {
      const response = await api.post('api/login', {
        email,
        password
      });

      if(response.data.success) {
        handleLoginSuccess(response.data.token);
      }

    } catch (error) {
      handleLoginFailure(error)
    }
  },
  async logout() {
    removeAuthToken();
  }
}

// FUNCTIONS
export function setAuthToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getAuthToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeAuthToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function handleLoginSuccess(token: string): void {
  setAuthToken(token);
}

export function handleLoginFailure(error: IRequestError): void {
  if (error.response && error.response.data && error.response.data.message) {
    alert('Error')
  }
}
