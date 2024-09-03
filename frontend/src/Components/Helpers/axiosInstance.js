import axios from "axios";

const BASE_URL = "https://mern-stack-project-1-6.onrender.com";

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
