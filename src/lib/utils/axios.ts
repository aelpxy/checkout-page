import Axios from "axios";

export const axios = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_PANDABASE_API_URL}`,
  withCredentials: false,
});
