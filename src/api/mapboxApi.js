import axios from "axios";

const mapboxApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

//Todo: configurar interceptores

mapboxApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});

export default mapboxApi;
