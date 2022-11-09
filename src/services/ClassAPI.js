import axios from "axios";
import AuthHeader from "./auth.header";

class ClassAPI {
  async getClassDetail() {
    return axios.get(`${process.env.API_URL}/user`, {
      headers: await AuthHeader(),
    });
  }
}

export default new ClassAPI();
