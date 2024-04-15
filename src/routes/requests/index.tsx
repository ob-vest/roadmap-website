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
import { useState } from "react";
import { IRequest } from "@/hooks/useRequests";

export const Route = createFileRoute("/requests/")({
  component: () => RequestPage(),
});

function RequestPage() {
  const defaultSortType = "CreatedAt";
  const { data: requests, error, isLoading } = useRequests();
  const [sortType, setSortType] = useState(defaultSortType);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortChange = (value: string) => {
    setSortType(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredAndSortedRequests = requests
    ?.filter((request: IRequest) => {
      return (
        request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.id.toString() === searchTerm
      );
    })
    .sort((a: IRequest, b: IRequest) => {
      switch (sortType) {
        case "CreatedAt":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case "UpdatedAt":
          return (
            new Date(b.lastActivityAt).getTime() -
            new Date(a.lastActivityAt).getTime()
          );
        case "Votes":
          return b.upvoteCount - a.upvoteCount;
        default:
          return 0;
      }
    });

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-10">Requests</h2>
      <Input
        placeholder="Search for requests"
        onChange={handleSearchChange}
        className="max-w-72"
      />
      <div className=" my-10 flex w-full items-center justify-end gap-3">
        <p className="text-muted-foreground">Sorted by</p>
        <Select defaultValue={defaultSortType} onValueChange={handleSortChange}>
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
        {error && <p>{error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {filteredAndSortedRequests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>
    </div>
  );
}
