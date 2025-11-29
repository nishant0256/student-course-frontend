import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3507",
});

export default API;
