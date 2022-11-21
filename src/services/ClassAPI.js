import axios from "axios";
import AuthHeader from "./auth.header";

class ClassAPI {
  async getClassById(id) {
    return axios.get(`${process.env.API_URL}/class/` + id, {
      headers: await AuthHeader(),
    });
  }

  async getAllClass() {
    return axios.get(`${process.env.API_URL}/class`, {
      headers: await AuthHeader(),
    });
  }

  async getAllClassByStudent() {
    return axios.get(`${process.env.API_URL}/class/student`, {
      headers: await AuthHeader(),
    });
  }
}

export default new ClassAPI();
