import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReviewPage from "@/components/RequestReview";
import usePendingRequests from "@/hooks/usePendingRequests";
import { distanceFromDate } from "@/utils/dateUtils";
import { ScrollArea } from "./ui/scroll-area";

const PendingRequestsBox = () => {
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
            <Dialog key={request.id}>
              <DialogTrigger asChild>
                <li className="mb-2 flex items-center justify-between rounded-md border border-border p-3 hover:border-primary  ">
                  <p>{request.title}</p>{" "}
                  <p className="ml-2 text-xs text-muted-foreground">
                    {distanceFromDate(request.createdAt)}
                  </p>
                </li>
              </DialogTrigger>
              <DialogContent className="h-[80svh] max-w-4xl overflow-y-scroll border-none scrollbar-hide">
                <ReviewPage request={request} />
              </DialogContent>
            </Dialog>
          ))}
        </ScrollArea>
      </ul>
    </div>
  );
};

export default PendingRequestsBox;
