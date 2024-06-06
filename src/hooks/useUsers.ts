import ApiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface IUserListItem {
  id: number;
  displayName: string;
  commentCount: number;
  requestCount: number;
  createdAt: Date;
}
export interface IUserListRoot {
  users: IUserListItem[];
  total: number;
}

// const useUsers = (page: number) => {
//   return useData<IUserListRoot>({
//     key: `users-${page}`,
//     endpoint: "admin/users",
//   });
// };

const useUsers = (page: number, limit: number = 15) => {
  const requestConfig = {
    params: {
      page: page,
      limit: limit,
    },
  };
  const fetchUsers = async () => {
    const apiClient = new ApiClient<IUserListRoot>(
      "admin/users",
      requestConfig,
    );
    const data = await apiClient.get();
    return data;
  };

  const { data, isLoading, isError, error } = useQuery<IUserListRoot, Error>({
    queryKey: [`users-${page}`],
    queryFn: fetchUsers,
  });

  return { data, isLoading, isError, error };
};

export default useUsers;
