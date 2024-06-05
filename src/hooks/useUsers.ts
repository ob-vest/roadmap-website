import useData from "./useData";

export interface IUserListItem {
  id: number;
  displayName: string;
  commentCount: number;
  requestCount: number;
  createdAt: Date;
}
const useUsers = () => {
  return useData<IUserListItem>({
    key: "users",
    endpoint: "admin/users",
  });
};

export default useUsers;
