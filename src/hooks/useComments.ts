import useData from "./useData";

export interface IComment {
  id: number;
  userId: number;
  displayName: string;
  text: string;
  createdAt: Date;
}

const useComments = (requestId: string) => {
  return useData<IComment>({
    key: "comments" + requestId, // Unique key for each requests comment section
    endpoint: "requests/" + requestId + "/comments",
  });
};

export default useComments;
