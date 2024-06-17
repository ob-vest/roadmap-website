import { toast } from "sonner";
import ApiClient from "../services/apiClient";
import { AxiosRequestConfig } from "axios";
interface IUpdateRequest {
  id: number;
}

type UpdateRequestParams = {
  title?: string;
  description?: string;
  stateId?: number;
};
const useUpdateRequest = ({ id }: IUpdateRequest) => {
  const updateRequest = async (params: UpdateRequestParams) => {
    try {
      const requestConfig: AxiosRequestConfig = {
        data: {
          title: params.title,
          description: params.description,
          stateId: params.stateId,
        },
      };
      console.log("Updating request");
      const endpoint = `/admin/requests`;
      console.log(endpoint);
      const apiClient = new ApiClient<UpdateRequestParams>(
        endpoint,
        requestConfig,
      );
      const response = await apiClient.update(id, params);

      if (response.status === 200) {
        console.log("Request updated");
        toast.success("Request updated successfully");
      }
    } catch (error) {
      console.error("Failed to update request", error);
      toast.error("Failed to update request");
    }
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
