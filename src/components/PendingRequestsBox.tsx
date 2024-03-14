import { Link } from "@tanstack/react-router";

const PendingRequestsBox = () => {
  //   const { data } = useQuery("pendingRequests", () => fetchPendingRequests());
  return (
    <div className="rounded-lg border border-border px-5 py-3">
      <h3 className="mb-5 text-left ">Pending Requests</h3>
      <ul className="flex flex-col gap-3  ">
        <Link to="/login">
          <li className="flex items-center justify-between rounded-md border border-border p-3 hover:bg-secondary  ">
            <p>A totally new idea. Pls add button</p>{" "}
            <p className="ml-2 text-xs text-muted-foreground">30min ago</p>
          </li>
        </Link>
        <Link to="/login">
          <li className="flex items-center justify-between rounded-md border border-border p-3 hover:bg-secondary  ">
            <p>A totally new idea. Pls add button</p>{" "}
            <p className="ml-2 text-xs text-muted-foreground">30min ago</p>
          </li>
        </Link>
        <Link to="/login">
          <li className="flex items-center justify-between rounded-md border border-border p-3 hover:bg-secondary  ">
            <p>A totally new idea. Pls add button</p>{" "}
            <p className="ml-2 text-xs text-muted-foreground">30min ago</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default PendingRequestsBox;
