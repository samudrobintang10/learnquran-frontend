import axios from "axios";
import AuthHeader from "./auth.header";

class TaskAPI {
  async getTask(id, id_student) {
    return axios.get(
      `${process.env.API_URL}/task/${id}?student_id=` + id_student,
      {
        headers: await AuthHeader(),
      }
    );
  }

}

export default new TaskAPI();
