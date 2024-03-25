import useData from "./useData";
import { formatDistance } from "date-fns";

export interface IRequest {
  id: number;
  title: string;
  description: string;
  upvoteCount: number;
  commentCount: number;
  createdAt: Date;
  lastActivityAt: Date;
}

export function createdAtDistance(createdAt: Date) {
  return formatDistance(createdAt, new Date(), {
    addSuffix: true,
  });
}

const useRequests = () => {
  return useData<IRequest>("requests");
};

export default useRequests;
