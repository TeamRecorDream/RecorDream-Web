import { api } from "./api";

const BASE_PATH = "/user";

const user = {
  deleteUser: (accessToken: string) =>
    api.delete(`${BASE_PATH}`, {
      headers: { Authorization: accessToken },
    }),
};

export default user;
