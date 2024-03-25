import useData from "./useData";
import { IRequest } from "./useRequests";

const usePendingRequests = () => {
  return useData<IRequest>("admin/requests", {
    params: {
      stateId: 1,
    },
  });
};

export default usePendingRequests;
