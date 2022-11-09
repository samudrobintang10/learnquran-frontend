import { deleteItem, getValueFor } from "../utilities/secureStorage";

async function AuthHeader() {
  const access_token = await getValueFor("accessToken");
  if (access_token) {
    return {
      apiKey: process.env.API_KEY,
      Authorization: "Bearer " + access_token,
    };
  } else {
    return null;
  }
}

export default AuthHeader;
