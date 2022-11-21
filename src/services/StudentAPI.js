import axios from "axios";
import AuthHeader from "./auth.header";

class StudentAPI {
  async enrollClass(id) {
    return axios.post(
      `${process.env.API_URL}/student/enroll/` + id,
      {},
      {
        headers: await AuthHeader(),
      }
    );
  }

  async unenrollClass(id) {
    return axios.post(
      `${process.env.API_URL}/student/unenroll/` + id,
      {},
      {
        headers: await AuthHeader(),
      }
    );
  }
}

export default new StudentAPI();
