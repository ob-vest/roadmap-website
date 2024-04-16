import usePendingRequests from "@/hooks/usePendingRequests";

import { ScrollArea } from "./ui/scroll-area";
import PendingRequestsBox from "./PendingRequestBox";

const PendingRequestsList = () => {
  const { data: pendingRequests, error } = usePendingRequests();

  //   const { data } = useQuery("pendingRequests", () => fetchPendingRequests());
  return (
    <div className="flex h-60 flex-col rounded-lg border border-border px-5 py-3">
      <h3 className="mb-5 text-left ">
        Pending Requests
        {pendingRequests.length > 0 && ` (${pendingRequests.length})`}
      </h3>
      <ul className=" overflow-y-clip ">
        <ScrollArea className="h-full">
          {error && <p>Failed to load pending requests: {error.message}</p>}
          {pendingRequests.map((request) => (
            <PendingRequestsBox key={request.id} {...request} />
          ))}
        </ScrollArea>
      </ul>
    </div>
  );
};

export default PendingRequestsList;
