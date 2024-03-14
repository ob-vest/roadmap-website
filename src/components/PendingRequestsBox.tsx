import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReviewPage from "@/components/request-review";

const PendingRequestsBox = () => {
  //   const { data } = useQuery("pendingRequests", () => fetchPendingRequests());
  return (
    <div className="rounded-lg border border-border px-5 py-3">
      <h3 className="mb-5 text-left ">Pending Requests</h3>
      <ul className="flex flex-col gap-3  ">
        <Dialog>
          <DialogTrigger asChild>
            <li className="flex items-center justify-between rounded-md border border-border p-3 hover:border-primary  ">
              <p>A totally new idea. Pls add button</p>{" "}
              <p className="ml-2 text-xs text-muted-foreground">30min ago</p>
            </li>
          </DialogTrigger>
          <DialogContent className="scrollbar-hide h-[80svh] max-w-4xl overflow-y-scroll border-none">
            <ReviewPage />
          </DialogContent>
        </Dialog>

        {/* <Link to="/request-review">
          <li className="flex items-center justify-between rounded-md border border-border p-3 hover:border-primary  ">
            <p>A totally new idea. Pls add button</p>{" "}
            <p className="ml-2 text-xs text-muted-foreground">30min ago</p>
          </li>
        </Link>
        <Link to="/request-review">
          <li className="flex items-center justify-between rounded-md border border-border p-3 hover:border-primary  ">
            <p>A totally new idea. Pls add button</p>{" "}
            <p className="ml-2 text-xs text-muted-foreground">30min ago</p>
          </li>
        </Link> */}
      </ul>
    </div>
  );
};

export default PendingRequestsBox;
