// IMPORTS
import api from './api';
import { IRequestError } from '@/interfaces/IError';
import { ILogin } from '@/interfaces/ILogin';

// VARIABLES
const TOKEN_KEY = 'authToken';
const REFRESH_TOKEN_KEY = 'refreshToken';


// OBJECTS
export const authService = {
  //createLogin: async
  //FUNCTIONS
  async login({ email, password }: ILogin) {
    try {
      const response = await api.post('api/login', {
        email,
        password
      });

      console.log('RESPONSE', response)

      const token = response.data.token;
      const refreshToken = response.data.refreshToken;

      if(response.status === 200) {
        handleLoginSuccess(token, refreshToken);
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

  if(response.data.success) {
    handleLoginSuccess(token, refreshToken);
  }
}

export function setAuthToken(token: string, refreshToken?: string): void {
  localStorage.setItem(TOKEN_KEY, token);
  // Salvar como Http only cookie
  if(refreshToken){
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }

  //Verificar quando enviar alguma requisição para o servidor se o token está valido,
  //se não estiver buscar o refresh. Caso o refresh token também estiver inválido, deslogar e logar novamente.

  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export function getAuthToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeAuthToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function handleLoginSuccess(token: string, refreshToken?: string): void {
  setAuthToken(token, refreshToken);
}

export function handleLoginFailure(error: IRequestError): void {
  if (error.response && error.response.data && error.response.data.message) {
    alert('Error')
  }
}
