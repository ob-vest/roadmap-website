import axios from "axios";
// Due to CORS policy, development environment uses localhost:3000
const apiHost =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : process.env.API_HOST;

const apiClient = axios.create({
  baseURL: apiHost,
});

export default apiClient;
