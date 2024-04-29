import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";

interface IStatistics {
  totalRequests: number;
  totalUpvotes: number;
  totalComments: number;
  totalUsers: number;
}

const useStatistics = (pastDays: string) => {
  const requestConfig = {
    params: {
      pastDays: pastDays,
    },
  };
  const fetchStatistics = async () => {
    const apiClient = new ApiClient<IStatistics>(
      "/admin/statistics",
      requestConfig,
    );
    const data = await apiClient.get();
    return data;
  };

  const { data, isLoading, isError, error } = useQuery<IStatistics, Error>({
    queryKey: ["statistics", pastDays],
    queryFn: fetchStatistics,
  });

  return { data, isLoading, isError, error };
};

export default useStatistics;
