import axios from "axios";
import AuthHeader from "./auth.header";

class ClassAPI {
  async getClassById(id) {
    console.log(process.env.API_URL)
    console.log(process.env.API_KEY)
    return axios.get(`${process.env.API_URL}/class/` + id, {
      headers: await AuthHeader(),
    });
  }

  async getAllClass() {
    console.log(process.env.API_URL)
    console.log(process.env.API_KEY)
    return axios.get(`${process.env.API_URL}/class`, {
      headers: await AuthHeader(),
    });
  }

  async getAllClassByStudent() {
    console.log(process.env.API_URL)
    console.log(process.env.API_KEY)
    return axios.get(`${process.env.API_URL}/class/student`, {
      headers: await AuthHeader(),
    });
  }

  async searchClass(keyword) {
    console.log(process.env.API_URL)
    console.log(process.env.API_KEY)
    return axios.get(`${process.env.API_URL}/class/search?keyword=` + keyword, {
      headers: await AuthHeader(),
    });
  }
}

export default new ClassAPI();
