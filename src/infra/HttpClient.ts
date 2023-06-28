import api from "@/services/api"

export const HttpClient = {
  async post(parameters) {
    const response = await api.post('api/login', {parameters});

    return response.data;
  }
}
