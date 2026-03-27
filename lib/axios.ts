import { BASE_URL } from "@/helpers/utils.helper";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
