import axios from "axios";
import AuthHeader from "./auth.header";

class TaskAPI {
  async getTask(id, id_student) {
    console.log(process.env.API_URL);
    console.log(process.env.API_KEY);
    return axios.get(
      `${process.env.API_URL}/task/${id}?student_id=` + id_student,
      {
        headers: await AuthHeader(),
      }
    );
  }

  async createTask(name, description, idClass) {
    console.log(process.env.API_URL);
    console.log(process.env.API_KEY);
    return axios.post(
      `${process.env.API_URL}/task/create?class_id=` + idClass,
      {
        name: name,
        description: description,
        deadline_date: "2022-10-30T23:55:00.000Z",
      },
      {
        headers: await AuthHeader(),
      }
    );
  }

  async editTask(id, name, description) {
    console.log(process.env.API_URL);
    console.log(process.env.API_KEY);
    return axios.put(
      `${process.env.API_URL}/task/update?task_id=${id}`,
      {
        name: name,
        description: description,
      },
      {
        headers: await AuthHeader(),
      }
    );
  }

  async deleteTask(idClass, idTask) {
    return axios.delete(`${process.env.API_URL}/task/delete?class_id=${idClass}&task_id=${idTask}`, {
      headers: await AuthHeader(),
    });
  }
}

export default new TaskAPI();
