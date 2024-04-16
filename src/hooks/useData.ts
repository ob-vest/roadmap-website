/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import { AxiosRequestConfig } from "axios";

// Interface used to explicitly define the type of data useData will need.
interface UseDataParams<T> {
  key: string;
  endpoint: string;
  requestConfig?: AxiosRequestConfig;
  defaultData?: T[];
}
const useData = <T>({
  key,
  endpoint,
  requestConfig,
  defaultData = [],
}: UseDataParams<T>) => {
  const fetchData = async () => {
    const apiClient = new ApiClient<T>(endpoint, requestConfig);
    const data = await apiClient.getAll();
    return data;
  };

  const {
    data = defaultData,
    isLoading,
    isError,
    error,
  } = useQuery<T[], Error>({
    queryKey: [key],
    queryFn: fetchData,
  });

  return { data, isLoading, isError, error };
};

export default useData;
