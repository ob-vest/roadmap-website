import axios from "axios";
import { AxiosRequestConfig } from "axios";
// Due to CORS policy, development environment uses localhost:3000
const apiHost =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : process.env.API_HOST;

const axiosInstance = axios.create({
  baseURL: apiHost,
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("authorizationToken");
    }
    return Promise.reject(error);
  },
);
class ApiClient<T> {
  endpoint: string;
  requestConfig?: AxiosRequestConfig;

  constructor(endpoint: string, requestConfig?: AxiosRequestConfig) {
    this.endpoint = endpoint;
    this.requestConfig = requestConfig;
    if (!this.requestConfig) {
      this.requestConfig = {};
    }
    const token = localStorage.getItem("authorizationToken");

    if (token) {
      this.requestConfig.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
  }

  getAll = async () => {
    return axiosInstance
      .get<T[]>(this.endpoint, this.requestConfig)
      .then((res) => res.data);
  };
  get = async (id?: number) => {
    const res = await axiosInstance.get<T>(
      `${this.endpoint}/${id !== undefined ? id : ""}`,
      this.requestConfig,
    );
    return res.data;
  };

  post = async (data?: T) => {
    return axiosInstance.post<T>(this.endpoint, data, this.requestConfig);
  };
  update = async (id: number, data: T) => {
    return axiosInstance.patch<T>(
      `${this.endpoint}/${id}`,
      data,
      this.requestConfig,
    );
  };

  delete = async (id: number) => {
    return axiosInstance.delete<T>(
      `${this.endpoint}/${id}`,
      this.requestConfig,
    );
  };
}

export default ApiClient;
