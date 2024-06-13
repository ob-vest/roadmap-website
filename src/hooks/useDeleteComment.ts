import ApiClient from "../services/apiClient";

export const useDeleteComment = async (commentId: number) => {
  const apiClient = new ApiClient<string>(`/admin/comments`);
  const data = await apiClient.delete(commentId);
  return data;
};
