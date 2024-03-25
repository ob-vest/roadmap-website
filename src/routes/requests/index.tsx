import { createFileRoute } from "@tanstack/react-router";
import RequestCard from "@/components/RequestCard";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import useRequests from "@/hooks/useRequests";

export const Route = createFileRoute("/requests/")({
  component: () => RequestPage(),
});

function RequestPage() {
  const { data: requests, error, isLoading } = useRequests();
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-10">Requests</h2>
      <Input placeholder="Search for requests" className="max-w-72" />
      <div className=" my-10 flex w-full items-center justify-end gap-3">
        <p className="text-muted-foreground">Sorted by</p>
        <Select defaultValue="CreatedAt">
          <SelectTrigger className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CreatedAt">Creation date</SelectItem>
            <SelectItem value="UpdatedAt">Last updated</SelectItem>
            <SelectItem value="Votes">Votes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        {requests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>
    </div>
  );
}
