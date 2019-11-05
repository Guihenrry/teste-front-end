import axios from "axios";

const key = "AIzaSyBPUf2zbbBTpEjRWN95c6gtDN7OgUtPmW4";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint + "&key=" + key);
  }
};
