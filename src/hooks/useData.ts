/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig } from "axios";

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  defaultData: T[] = [],
) => {
  const fetchData = async () => {
    const res = await apiClient.get<T[]>(endpoint, requestConfig);
    return res.data;
  };

  const {
    data = defaultData,
    isLoading,
    isError,
    error,
  } = useQuery<T[], Error>({
    queryKey: [endpoint],
    queryFn: fetchData,
  });

  return { data, isLoading, isError, error };
};

export default useData;
