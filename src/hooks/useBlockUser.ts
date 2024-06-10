import ApiClient from "../services/apiClient";
import { AxiosRequestConfig } from "axios";

// interface IUpdateRequest {
//   id: number;
// }

// type UpdateRequestParams = {
//   title?: string;
//   description?: string;
//   stateId?: number;
// };

export interface BlockUser {
  userId: number;
  block: boolean;
}

const useBlockRequest = (blockUser: BlockUser) => {
  const requestConfig: AxiosRequestConfig = {
    data: {
      isBlocked: blockUser.block,
    },
  };
  console.log("Updating user");
  const endpoint = `/admin/users`;
  console.log(endpoint);
  const apiClient = new ApiClient<string>(endpoint, requestConfig);
  const update = apiClient.update(blockUser.userId, requestConfig.data);
  console.log("update", update);
  return update;
};

export default useBlockRequest;
