import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReviewPage from "@/components/RequestReview";
import { distanceFromDate } from "@/utils/dateUtils";
import { IRequest } from "@/hooks/useRequests";
import { useState } from "react";

const PendingRequestsBox = (request: IRequest) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen} key={request.id}>
        <DialogTrigger asChild>
          <li className="mb-2 flex items-center justify-between rounded-md border border-border p-3 hover:border-primary  ">
            <p>{request.title}</p>{" "}
            <p className="ml-2 text-xs text-muted-foreground">
              {distanceFromDate(request.createdAt)}
            </p>
          </li>
        </DialogTrigger>
        <DialogContent className="h-[80svh] max-w-4xl overflow-y-scroll border-none scrollbar-hide">
          <ReviewPage request={request} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PendingRequestsBox;
