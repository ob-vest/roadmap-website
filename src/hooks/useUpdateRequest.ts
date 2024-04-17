import ApiClient from "../services/apiClient";
import { AxiosRequestConfig } from "axios";
import { IRequest } from "./useRequests";

interface IUpdateRequest {
  id: number;
}

const useUpdateRequest = ({ id }: IUpdateRequest) => {
  const updateRequest = async (data: IRequest) => {
    const requestConfig: AxiosRequestConfig = {
      data: {
        title: data.title,
        description: data.description,
      },
    };
    console.log("Updating request");
    const endpoint = `/admin/requests`;
    console.log(endpoint);
    const apiClient = new ApiClient<IRequest>(endpoint, requestConfig);
    apiClient.update(id, data);
    console.log("Request updated");
  };

  return updateRequest;
};

// const useUpdateRequest = ({
//   id: number,
//   requestConfig?: AxiosRequestConfig,
// }) => {
//   const updateRequest = async (data: IRequest) => {
//     const apiClient = new ApiClient<IRequest>(`/requests/${id}`, requestConfig);
//     return apiClient.update(id, data);
//   };

//   return updateRequest;
// };

export default useUpdateRequest;
