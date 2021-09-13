import api from "../utils/axios";

class VeiculoService {
  static async get() {
    try {
      const response = await api.get("/");
      //console.log(response.data)
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async getById(id) {
    try {
      const response = await api.get(`/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async store(data) {
    try {
      const response = await api.post("/", data);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async search(data) {
    try {
      const response = await api.post("/pesquisar", data);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async update(id,data){
    try {
        const response = await api.put(`/${id}`, data);
        return response.data;
    } catch (error) {
        return error;
    }
  }

  static async destroy(id) {
    try {
      const response = await api.delete(`/${id}`);
      //console.log(response.data)
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default VeiculoService;
