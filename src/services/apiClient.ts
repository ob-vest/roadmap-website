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

class ApiClient<T> {
  endpoint: string;
  requestConfig?: AxiosRequestConfig;

  constructor(endpoint: string, requestConfig?: AxiosRequestConfig) {
    this.endpoint = endpoint;
    this.requestConfig = requestConfig;
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
