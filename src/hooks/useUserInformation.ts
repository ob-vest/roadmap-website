import ApiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { IRequest } from "./useRequests";

export interface IUserInfo {
  id: number;
  displayName: string;
  isAdmin: boolean;
  isBlocked: boolean;
  createdAt: Date;
  requests: IRequest[];
  comments: IUserInfoComment[];
}

interface IUserInfoComment {
  id: number;
  text: string;
  createdAt: Date;
  isApproved: boolean;
}

const useUserInformation = (userId: number) => {
  const requestConfig = {};
  const fetchUser = async () => {
    const apiClient = new ApiClient<IUserInfo>(
      "admin/users/" + userId,
      requestConfig,
    );
    const data = await apiClient.get();
    return data;
  };

  const { data, isLoading, isError, error } = useQuery<IUserInfo, Error>({
    queryKey: [`user/${userId}`],
    queryFn: fetchUser,
  });

  return { data, isLoading, isError, error };
};

export default useUserInformation;
