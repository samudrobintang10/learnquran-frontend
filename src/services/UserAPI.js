import axios from "axios";
import AuthHeader from "./auth.header";

class UserAPI {
  async getUserDetail() {
    console.log(process.env.API_URL)
    console.log(process.env.API_KEY)
    return axios.get(`${process.env.API_URL}/user`, {
      headers: await AuthHeader(),
    });
  }

  async updateUserDetail(name, password, gender, phone_number) {
    console.log(process.env.API_URL)
    console.log(process.env.API_KEY)
    return axios.put(
      `${process.env.API_URL}/user/update`,
      {
        password: password,
        name: name,
        gender: gender,
        phone_number: phone_number,
      },
      {
        headers: await AuthHeader(),
      }
    );
  }
}

export default new UserAPI();
