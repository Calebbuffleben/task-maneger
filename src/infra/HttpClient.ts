import { ILogin } from "@/interfaces/ILogin";
import api from "@/services/api"

export const HttpClient = {
  async post(parameters: ILogin) {
    const response = await api.post('api/login', { parameters });

    return response.data;
  }
}
