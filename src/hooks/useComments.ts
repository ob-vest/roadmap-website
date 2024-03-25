import useData from "./useData";

export interface IComment {
  id: number;
  userId: number;
  displayName: string;
  text: string;
  createdAt: Date;
}

const useComments = (requestId: string) => {
  return useData<IComment>("requests/" + requestId + "/comments");
};

export default useComments;
