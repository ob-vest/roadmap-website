import useData from "./useData";

export interface IRequest {
  id: number;
  title: string;
  description: string;
  upvoteCount: number;
  commentCount: number;
  createdAt: Date;
  lastActivityAt: Date;
  stateId: number;
}

const useRequests = () => {
  return useData<IRequest>({ key: "requests", endpoint: "requests" });
};

export default useRequests;
