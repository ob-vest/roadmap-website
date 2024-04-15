import useData from "./useData";
import { IRequest } from "./useRequests";

const usePendingRequests = () => {
  return useData<IRequest>({
    key: "pendingRequests",
    endpoint: "admin/requests",
    requestConfig: { params: { stateId: 1 } },
  });
};

export default usePendingRequests;
