import { IRequest } from "./useRequests";
import ApiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useRequest = (requestId: number) => {
  const fetchRequest = async () => {
    const apiClient = new ApiClient<IRequest>("requests/" + requestId);
    const data = await apiClient.get();
    return data;
  };

  const { data, isLoading, isError, error } = useQuery<IRequest, Error>({
    queryKey: [`requests/${requestId}`],
    queryFn: fetchRequest,
  });

  return { data, isLoading, isError, error };
};

export default useRequest;
