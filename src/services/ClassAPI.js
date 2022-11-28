import axios from "axios";
import AuthHeader from "./auth.header";
import { getValueFor } from "../utilities/secureStorage";

class ClassAPI {
  async getClassById(id) {
    console.log(process.env.API_URL);
    console.log(process.env.API_KEY);
    return axios.get(`${process.env.API_URL}/class/` + id, {
      headers: await AuthHeader(),
    });
  }

  async getAllClass() {
    console.log(process.env.API_URL);
    console.log(process.env.API_KEY);
    return axios.get(`${process.env.API_URL}/class`, {
      headers: await AuthHeader(),
    });
  }

  async getAllClassByStudent() {
    console.log(process.env.API_URL);
    console.log(process.env.API_KEY);
    return axios.get(`${process.env.API_URL}/class/student`, {
      headers: await AuthHeader(),
    });
  }

  async getAllClassByTeacher() {
    console.log(process.env.API_URL);
    console.log(process.env.API_KEY);
    return axios.get(`${process.env.API_URL}/class/teacher`, {
      headers: await AuthHeader(),
    });
  }

  async searchClass(keyword) {
    console.log(process.env.API_URL);
    console.log(process.env.API_KEY);
    return axios.get(`${process.env.API_URL}/class/search?keyword=` + keyword, {
      headers: await AuthHeader(),
    });
  }

  async createClass(name, capacity) {
    console.log(process.env.API_URL);
    console.log(process.env.API_KEY);
    return axios.post(
      `${process.env.API_URL}/class/create`,
      {
        name: name,
        capacity: capacity,
      },
      {
        headers: await AuthHeader(),
      }
    );
  }

  async editClass(id, name, capacity) {
    console.log(process.env.API_URL);
    console.log(process.env.API_KEY);
    const data = await getValueFor("userData");
    return axios.put(
      `${process.env.API_URL}/class/${id}?user_id=${data.id}`,
      {
        name: name,
        capacity: capacity,
      },
      {
        headers: await AuthHeader(),
      }
    );
  }

  async deleteClass(id) {
    return axios.delete(`${process.env.API_URL}/class/` + id, {
      headers: await AuthHeader(),
    });
  }
}

export default new ClassAPI();
