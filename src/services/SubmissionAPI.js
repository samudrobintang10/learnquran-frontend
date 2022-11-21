import axios from "axios";
import AuthHeader from "./auth.header";
import { getValueFor } from "../utilities/secureStorage";

class SubmissionAPI {
  async submitRecording(formData, idSubmission) {
    const access_token = await getValueFor("accessToken");
    console.log(process.env.API_URL)
    console.log(process.env.API_KEY)
    return axios.post(
      `${process.env.API_URL}/submission/upload/` + idSubmission,
      formData,
      {
        headers: {
          apiKey: process.env.API_KEY,
          Authorization: "Bearer " + access_token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  async deleteRecording(idSubmission) {
    return axios.delete(
      `${process.env.API_URL}/submission/delete-audio/` + idSubmission,
      {
        headers: await AuthHeader(),
      }
    );
  }
}

export default new SubmissionAPI();
