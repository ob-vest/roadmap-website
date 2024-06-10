import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";

export interface ISuggestion {
  title: string;
  description: string;
}

const useSuggestionRequest = (requestId: number, userContent: ISuggestion) => {
  const fetchSuggestion = async () => {
    console.log("Posting suggestion");
    const endpoint = `/admin/suggestion`;
    console.log(endpoint);
    const apiClient = new ApiClient<ISuggestion>(endpoint);

    const res = await apiClient.post(userContent);

    console.log("Suggestion posted");
    return res.data;
  };

  const { data, isLoading, isError, error } = useQuery<ISuggestion, Error>({
    queryKey: ["suggest-", requestId],
    queryFn: fetchSuggestion,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { data, isLoading, isError, error };
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

export default useSuggestionRequest;
