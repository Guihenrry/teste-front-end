import axios from "axios";

const key = "AIzaSyCjq4Xt3wpvQ8GTfEfXtMrAn49XTZTiv_M";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint + "&key=" + key);
  }
};
