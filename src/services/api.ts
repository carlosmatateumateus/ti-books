import axios from "axios";

const api = axios.create({
  baseURL: "https://api.itbook.store/1.0/search"
})

export default api;